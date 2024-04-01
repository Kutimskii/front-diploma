import styles from './ticketsPages.module.css'
import React from 'react';
import { Pagination, ConfigProvider,PaginationProps } from 'antd';
export const TicketsPages:
React.FunctionComponent<{changeOffset:Function, totalCount:number | undefined, limit:number }>  = ({changeOffset, totalCount, limit}) => {
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'jump-next'){
      return <div className={styles.ticketsPagesJumpNext}><div >...</div></div>;
    }
    if (type === 'jump-prev'){
      return <div className={styles.ticketsPagesJumpPrev}><div >...</div></div>;
    }
    if (type === 'prev') {
      return <div className={styles.ticketsPagesPrevPageIcon}></div>;
    }
    if (type === 'next') {
      return <div className={styles.ticketsPagesNextPageIcon}></div>;
    }
    return originalElement;
  };
 
  return (  
  <div className={styles.ticketsPages}>
    <ConfigProvider
                theme={{
                  components: {
                    Pagination: {
                      itemActiveBg:'#FFA800',
                      itemSize:85,
                      fontSize:30,
                      borderRadius:5,
                      colorText:'#928F94',
                      colorTextDisabled:'#928F94',
                      itemActiveBgDisabled:'#FFA800',
                      colorPrimary:'#FFFFFF',
                      colorPrimaryHover:'#FFFFFF',
                      colorBgTextHover:'none',
                      
                    },
                  },
                }}
              >
      <Pagination 
      itemRender={itemRender}
      onChange={(page) =>changeOffset((page-1)*limit)}
      defaultCurrent={1} 
      total={totalCount} 
      hideOnSinglePage={true}
      pageSize={limit}
      showSizeChanger={false}
      showLessItems={true}
      />
    </ConfigProvider>
  </div>)
}