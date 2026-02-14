'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  const t = useTranslations('Navigation');
  const isLocalEnv = process.env.NODE_ENV === 'development';

  return (
    <ul className='cs_nav_list fw-medium'>
      <li>
        <Link href='/'>{t('home')}</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href='/' onClick={() => setMobileToggle(false)}>
                Home Version 1
              </Link>
            </li>
            <li>
              <Link href='/home2' onClick={() => setMobileToggle(false)}>
                Home Version 2
              </Link>
            </li>
            <li>
              <Link href='/home3' onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li>
      <li>
        <Link href='/about' onClick={() => setMobileToggle(false)}>
          {t('aboutUs')}
        </Link>
      </li>

      {/* Show additional menu items only in local development */}
      {isLocalEnv && (
        <>
          <li className='menu-item-has-children'>
            <Link href='#'>{t('pages')}</Link>
            <DropDown>
              <ul>
                <li>
                  <Link href='/team' onClick={() => setMobileToggle(false)}>
                    {t('ourTeam')}
                  </Link>
                </li>
                <li>
                  <Link href='/team/team-details' onClick={() => setMobileToggle(false)}>
                    {t('teamDetails')}
                  </Link>
                </li>
                <li>
                  <Link href='/pricing' onClick={() => setMobileToggle(false)}>
                    {t('pricing')}
                  </Link>
                </li>
                <li>
                  <Link href='/faq' onClick={() => setMobileToggle(false)}>
                    {t('faq')}
                  </Link>
                </li>
                <li>
                  <Link href='/contact' onClick={() => setMobileToggle(false)}>
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </DropDown>
          </li>

          <li className='menu-item-has-children'>
            <Link href='/project' onClick={() => setMobileToggle(false)}>
              {t('project')}
            </Link>
            <DropDown>
              <ul>
                <li>
                  <Link href='/project' onClick={() => setMobileToggle(false)}>
                    {t('project1')}
                  </Link>
                </li>
                <li>
                  <Link href='/project2' onClick={() => setMobileToggle(false)}>
                    {t('project2')}
                  </Link>
                </li>
                <li>
                  <Link href='/project/project-details' onClick={() => setMobileToggle(false)}>
                    {t('projectDetails')}
                  </Link>
                </li>
              </ul>
            </DropDown>
          </li>

          <li className='menu-item-has-children'>
            <Link href='/service' onClick={() => setMobileToggle(false)}>
              {t('services')}
            </Link>
            <DropDown>
              <ul>
                <li>
                  <Link href='/service' onClick={() => setMobileToggle(false)}>
                    {t('services')}
                  </Link>
                </li>
                <li>
                  <Link href='/service/service-details' onClick={() => setMobileToggle(false)}>
                    {t('servicesDetails')}
                  </Link>
                </li>
              </ul>
            </DropDown>
          </li>
          <li className='menu-item-has-children'>
            <Link href='/blog' onClick={() => setMobileToggle(false)}>
              {t('blog')}
            </Link>
            <DropDown>
              <ul>
                <li>
                  <Link href='/blog' onClick={() => setMobileToggle(false)}>
                    {t('blog')}
                  </Link>
                </li>
                <li>
                  <Link href='/blog-sidebar' onClick={() => setMobileToggle(false)}>
                    {t('blogWithSidebar')}
                  </Link>
                </li>
                <li>
                  <Link href='/blog-left-sidebar' onClick={() => setMobileToggle(false)}>
                    {t('blogLeftSidebar')}
                  </Link>
                </li>
                <li>
                  <Link href='/blog/blog-details' onClick={() => setMobileToggle(false)}>
                    {t('blogDetails')}
                  </Link>
                </li>
              </ul>
            </DropDown>
          </li>
        </>
      )}

      <li>
        <Link href='/contact' onClick={() => setMobileToggle(false)}>
          {t('contact')}
        </Link>
      </li>
    </ul>
  );
}
