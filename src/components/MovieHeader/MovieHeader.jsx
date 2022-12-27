import { RiHomeSmileFill, RiMovie2Line } from 'react-icons/ri';
import { Header, List, NavItem } from './MovieHeader.styled';

const navItems = [
  { href: '/', text: 'Home', icon: RiHomeSmileFill },
  { href: 'movies', text: 'Movies', icon: RiMovie2Line },
];

export const MovieHeader = () => {
  return (
    <Header>
      <nav>
        <List>
          {navItems.map(({ href, text, icon: Icon }) => (
            <li key={href}>
              <NavItem to={href}>
                <Icon size="15" />
                {text}
              </NavItem>
            </li>
          ))}
        </List>
      </nav>
    </Header>
  );
};
