'use client';

import Link from 'next/link';
import { ChevronUp, Plus } from 'lucide-react';
import { useState } from 'react';
import cn from 'classnames';

export default function Gnb() {
  const menuList = [
    { id: 1, title: '내 가계부' },
    { id: 2, title: '형준부' },
    { id: 3, title: '가족 가계부' },
  ];

  const subMenuList = [
    { id: 1, title: '대시보드', link: '#' },
    { id: 2, title: '거래내역', link: '#' },
    { id: 3, title: '카테고리', link: '#' },
    { id: 4, title: '설정', link: '#' },
  ];

  const [currentMenu, setCurrentMenu] = useState<Array<boolean>>(
    Array.from({ length: menuList.length }, (_, index) => index === 0)
  );
  const [currentSubMenu, setCurrentSubMenu] = useState<string>('1-1');

  const handleCurrentMenu = (index: number) => () => {
    setCurrentMenu(prevMenu => {
      const tempMenu = [...prevMenu];
      tempMenu[index] = !tempMenu[index];
      return tempMenu;
    });
  };

  const handleCurrentSubMenu = (menuStr: string) => () => {
    setCurrentSubMenu(menuStr);
  };

  return (
    <aside className="main-sub">
      <div className="inner_gnb">
        <h2 className="screen_out">메뉴</h2>
        {menuList.map((menu, index) => (
          <ul key={menu.id} className="list_gnb">
            <li className={cn({ on: currentMenu[index] })}>
              <button type="button" className="link_menu" onClick={handleCurrentMenu(index)}>
                <span className="txt_menu">{menu.title}</span>
                <ChevronUp className="ico_arr" />
              </button>
              <ul className="list_menu">
                {subMenuList.map(sub => (
                  <li
                    key={sub.id}
                    className={cn({
                      active: `${menu.id}-${sub.id}` === currentSubMenu,
                    })}
                  >
                    <Link
                      href={sub.link}
                      className="link_txt"
                      onClick={handleCurrentSubMenu(`${menu.id}-${sub.id}`)}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}

        <button type="button" className="new_account">
          새 가계부
          <Plus className="new_icon" />
        </button>
      </div>
    </aside>
  );
}
