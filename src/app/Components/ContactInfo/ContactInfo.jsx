'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import '../../assets/map-toggle.css';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationPinIcon from './icons/LocationPinIcon';
const ContactInfo = () => {
  const t = useTranslations('ContactInfo');
  const [activeMap, setActiveMap] = useState('warsaw');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState({ show: false, message: '', type: '' });
  const isWarsaw = activeMap === 'warsaw';

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('nameMinLength');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('emailInvalid');
    }

    // Phone validation (optional)
    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = t('phoneInvalid');
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = t('subjectRequired');
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const showToastMessage = (message, type) => {
    setShowToast({ show: true, message, type });
    setTimeout(() => {
      setShowToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      showToastMessage(t('fixErrors'), 'error');
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      location: isWarsaw ? 'warsaw' : 'varna',
      language: window.location.pathname.startsWith('/bg')
        ? 'bg'
        : window.location.pathname.startsWith('/pl')
          ? 'pl'
          : 'en',
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': data.language,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Response:', result);

        if (result.fallback) {
          showToastMessage(t('fallbackMessage'), 'success');
        } else {
          showToastMessage(t('successMessage'), 'success');
        }

        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
      } else {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
        showToastMessage(`${t('errorMessage')} (${response.status})`, 'error');
      }
    } catch (error) {
      console.error('Network error:', error);
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        // Fallback: Show success message but log the data locally
        console.log('Form data (server unavailable):', data);
        showToastMessage(t('fallbackMessage'), 'success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
      } else if (error.message.includes('CORS')) {
        showToastMessage('CORS error - server configuration issue', 'error');
      } else {
        showToastMessage(`${t('errorMessage')}: ${error.message}`, 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Toast Notification */}
      {showToast.show && (
        <div className={`toast-notification ${showToast.type}`}>{showToast.message}</div>
      )}

      <section className='contact-section section-padding fix'>
        <div className='container'>
          <div className='map-toggle-section'>
            <div className='map-toggle-buttons' data-active={activeMap}>
              <button
                className={`map-btn ${activeMap === 'warsaw' ? 'active' : ''}`}
                onClick={() => setActiveMap('warsaw')}
              >
                {t('warsaw')}
              </button>
              <button
                className={`map-btn ${activeMap === 'varna' ? 'active' : ''}`}
                onClick={() => setActiveMap('varna')}
              >
                {t('varna')}
              </button>
            </div>
          </div>
          <div className='contact-wrapper style1'>
            <div className='row gy-5'>
              <div className='col-xl-4 col-md-6'>
                <div className='contact-info-box style1'>
                  <div className='contact-content'>
                    <div className='icon'>
                      <LocationPinIcon />
                    </div>
                    <div className='title' style={{ fontSize: '20px' }}>
                      {t('ourAddress')}
                    </div>
                    <div className='text' style={{ fontSize: '16px' }}>
                      {isWarsaw ? <p>{t('warsawPoland')}</p> : <p>{t('varnaBulgaria')}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-md-6'>
                <div className='contact-info-box style1'>
                  <div className='contact-content'>
                    <div className='icon'>
                      <EmailIcon />
                    </div>
                    <h3 className='title' style={{ fontSize: '20px' }}>
                      <a href='mailto:iliyan.tsachev.ai@gmail.com'>iliyan.tsachev.ai@gmail.com</a>
                    </h3>

                    <p className='text' style={{ fontSize: '16px' }}>
                      {t('emailDescription')}
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-md-6'>
                <div className='contact-info-box style1'>
                  <div className='contact-content'>
                    <div className='icon'>
                      <PhoneIcon />
                    </div>
                    <h3 className='title' style={{ fontSize: '20px' }}>
                      <a
                        href={`tel:${isWarsaw ? '+48 791 724 341' : '+359 886 077 862'}`}
                        className='phone-link'
                      >
                        {`${t('phone')} : ${isWarsaw ? '+48 791 724 341' : '+359 886 077 862'}`}
                      </a>
                    </h3>
                    <p className='text' style={{ fontSize: '16px' }}>
                      {t('phoneDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-form-section section-padding pt-0 fix'>
        <div className='container'>
          <div className='contact-form-wrapper style1'>
            <div className='row gy-5 gx-60'>
              <div className='col-xl-6'>
                <div className='contact-map'>
                  <iframe
                    title={`${activeMap === 'warsaw' ? 'Warsaw' : 'Varna'} Location`}
                    src={`https://www.google.com/maps?q=${activeMap === 'warsaw' ? 'Warsaw,Poland' : 'Varna,Bulgaria'}&output=embed`}
                    width='100%'
                    height='280'
                    style={{
                      border: 0,
                      borderRadius: '15px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    }}
                    loading='lazy'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className='col-xl-6'>
                <div className='contact-form style1'>
                  <h2 className='contact-title'>{t('contactTitle')}</h2>
                  <p className='desc'>{t('description')}</p>

                  <form id='contact-form' className='contact-form-items' onSubmit={handleSubmit}>
                    <div className='row g-4'>
                      {/* Row 1: Name (Full width) */}
                      <div className='col-lg-12 wow fadeInUp' data-wow-delay='.3s'>
                        <div className='form-clt'>
                          <span>{t('yourName')}</span>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t('yourNamePlaceholder')}
                            className={errors.name ? 'error' : ''}
                            required
                          />
                          {errors.name && <span className='error-message'>{errors.name}</span>}
                        </div>
                      </div>
                      {/* Row 2: Email | Phone (Side by side) */}
                      <div className='col-lg-6 wow fadeInUp' data-wow-delay='.5s'>
                        <div className='form-clt'>
                          <span>{t('yourEmail')}</span>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t('yourEmailPlaceholder')}
                            className={errors.email ? 'error' : ''}
                            required
                          />
                          {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                      </div>
                      <div className='col-lg-6 wow fadeInUp' data-wow-delay='.6s'>
                        <div className='form-clt'>
                          <span>{t('yourPhone')}</span>
                          <input
                            type='tel'
                            name='phone'
                            id='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t('yourPhonePlaceholder')}
                            className={errors.phone ? 'error' : ''}
                          />
                          {errors.phone && <span className='error-message'>{errors.phone}</span>}
                        </div>
                      </div>
                      {/* Row 3: Subject (Full width) */}
                      <div className='col-lg-12 wow fadeInUp' data-wow-delay='.7s'>
                        <div className='form-clt'>
                          <span>{t('yourSubject')}*</span>
                          <input
                            type='text'
                            name='subject'
                            id='subject'
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder={t('yourSubjectPlaceholder')}
                            className={errors.subject ? 'error' : ''}
                            required
                          />
                          {errors.subject && (
                            <span className='error-message'>{errors.subject}</span>
                          )}
                        </div>
                      </div>
                      {/* Row 4: Message (Full width) */}
                      <div className='col-lg-12 wow fadeInUp' data-wow-delay='.8s'>
                        <div className='form-clt'>
                          <span>{t('writeMessage')}</span>
                          <textarea
                            name='message'
                            id='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t('writeMessagePlaceholder')}
                            className={errors.message ? 'error' : ''}
                            required
                          ></textarea>
                          {errors.message && (
                            <span className='error-message'>{errors.message}</span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-7 wow fadeInUp' data-wow-delay='.9s'>
                        <button type='submit' className='theme-btn' disabled={isSubmitting}>
                          {isSubmitting ? t('sending') : t('sendMessage')}{' '}
                          <i className='bi bi-arrow-right'></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
