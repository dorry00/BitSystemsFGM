import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LockIcon from '@mui/icons-material/Lock';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { NavItem } from '../nav-item';
import { AuthContext } from '../../Context/AuthContext';




export const DashboardSidebar = (props) => {
  let items = []

  const {user} = useContext(AuthContext)

  if (user.user_type === "0"){

     items = [
      {
        href: '/dashboard',
        icon: (<InsertChartIcon fontSize="small" />),
        title: 'Dashboard'
      },
      {
        href: "/users",
        icon: (<PersonIcon fontSize="small" />),
        title: 'Users'
      },
      {
        href: '/messages',
        icon: (<ShoppingBagIcon fontSize="small" />),
        title: 'Messages'
      },
      {
        href: '/adduser',
        icon: (<PersonIcon fontSize="small" />),
        title: 'Add users'
      },
      {
        href: '/settings',
        icon: (<PsychologyIcon fontSize="small" />),
        title: 'Settings'
      },
      {
        href: '/reports',
        icon: (<LockIcon fontSize="small" />),
        title: 'Reports'
      },
      {
        href: '/logout',
        icon: (<LockIcon fontSize="small" />),
        title: 'Logout'
      },
    ];

  }

  if (user.user_type === "1"){

    items = [
      {
        href: '/dashboard',
        icon: (<InsertChartIcon fontSize="small" />),
        title: 'Dashboard'
      },
      {
        href: "/users",
        icon: (<PersonIcon fontSize="small" />),
        title: 'Users'
      },
      {
        href: '/messages',
        icon: (<ShoppingBagIcon fontSize="small" />),
        title: 'Messages'
      },
      {
        href: '/adduser',
        icon: (<PersonIcon fontSize="small" />),
        title: 'Add users'
      },
      {
        href: '/settings',
        icon: (<PsychologyIcon fontSize="small" />),
        title: 'Settings'
      },
      {
        href: '/reports',
        icon: (<LockIcon fontSize="small" />),
        title: 'Reports'
      },
      {
        href: '/logout',
        icon: (<LockIcon fontSize="small" />),
        title: 'Logout'
      },
    ];

  }


  if (user.user_type === "2"){

    items = [
      {
        href: '/dashboard',
        icon: (<InsertChartIcon fontSize="small" />),
        title: 'Dashboard'
      },
      {
        href: "/users",
        icon: (<PersonIcon fontSize="small" />),
        title: 'Users'
      },
      {
        href: '/messages',
        icon: (<ShoppingBagIcon fontSize="small" />),
        title: 'Messages'
      },
      {
        href: '/adduser',
        icon: (<PersonIcon fontSize="small" />),
        title: 'Add users'
      },
      {
        href: '/settings',
        icon: (<PsychologyIcon fontSize="small" />),
        title: 'Settings'
      },
      {
        href: '/reports',
        icon: (<LockIcon fontSize="small" />),
        title: 'Reports'
      },
      {
        href: '/logout',
        icon: (<LockIcon fontSize="small" />),
        title: 'Logout'
      },
    ];

  }



  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router?.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router?.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <p>{user.user_type}</p>
            <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  User menu
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Admin
                </Typography>
              </div>
              
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
       
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};