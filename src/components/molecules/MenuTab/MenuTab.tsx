import React from 'react';
import { useHistory } from 'react-router-dom';
import MenuButton from 'components/atoms/Button/MenuButton/MenuButton';
import folderActive from 'assets/icons/folder_active.png';
import folderNonactive from 'assets/icons/folder_nonactive.png';
import searchActive from 'assets/icons/search_active.png';
import searchNonActive from 'assets/icons/search_nonactive.png';
import personActive from 'assets/icons/person_active.png';
import personNonactive from 'assets/icons/person_nonactive.png';
import trophyActive from 'assets/icons/trophy_active.png';
import trophyNonactive from 'assets/icons/trophy_nonactive.png';
import { StyledMenuTab, StyledMenuWrapper } from './MenuTab.styled';

interface Props {
  activeIndex: number;
}

const menus = [
  {
    id: 0,
    activeIconSrc: folderActive,
    nonactiveIconSrc: folderNonactive,
    title: '나의 스터디',
    path: '/mystudy',
  },
  {
    id: 1,
    activeIconSrc: searchActive,
    nonactiveIconSrc: searchNonActive,
    title: '스터디 찾기',
    path: '/findstudy',
  },
  {
    id: 2,
    activeIconSrc: trophyActive,
    nonactiveIconSrc: trophyNonactive,
    title: '스터디 리그',
    path: '/studyleague',
  },
  {
    id: 3,
    activeIconSrc: personActive,
    nonactiveIconSrc: personNonactive,
    title: '마이 페이지',
    path: '/mypage',
  },
];

const MenuTab: React.FC<Props> = ({ activeIndex }: Props) => {
  const history = useHistory();

  return (
    <StyledMenuTab>
      {menus.map(({ id, activeIconSrc, nonactiveIconSrc, title, path }) => (
        <StyledMenuWrapper key={id}>
          <MenuButton
            activeIconSrc={activeIconSrc}
            nonactiveIconSrc={nonactiveIconSrc}
            title={title}
            active={id === activeIndex}
            onClick={() => history.push(path)}
          />
        </StyledMenuWrapper>
      ))}
    </StyledMenuTab>
  );
};

export default MenuTab;
