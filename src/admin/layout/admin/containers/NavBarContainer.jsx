import React from 'react';
import { useLocation } from 'react-router-dom';
import useClientNav from '../../../../common/hooks/useClientNav';
import NavBar from '../components/NavBar';

const navLinks = [
  {
    label: 'Dashboard',
    iconType: 'dashboardApp',
    href: '/admin/page-a',
  },
  {
    label: 'Reports',
    iconType: 'visualizeApp',
    href: '/admin/page-b',
  },
  {
    label: 'Monitoring',
    iconType: 'monitoringApp',
    href: '/admin/page-c',
  },
  {
    label: 'Tools',
    iconType: 'devToolsApp',
    href: '/admin/page-d',
  },
  {
    label: 'Configure',
    iconType: 'managementApp',
    href: '/admin/page-e',
  },
];

function NavBarContainer(props, ref) {
  const { getLinkProps } = useClientNav();
  const location = useLocation();
  function decorateLink(item) {
    return ({
      ...item,
      ...getLinkProps(item.href),
      isActive: item.href === location.pathname,
    });
  }
  const links = navLinks.map(item => decorateLink(item));
  return <NavBar links={links} ref={ref} />;
}

export default React.forwardRef(NavBarContainer);