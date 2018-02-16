import * as React from 'react';
import styles from '../AppCustomizer.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ITenantMegaMenuProps } from './ITenantMegaMenuProps';
import { ITenantMegaMenuState } from './ITenantMegaMenuState';

import * as SPTermStore from './../services/SPTermStoreService'; 

export default class TenantMegaMenu extends React.Component<ITenantMegaMenuProps, ITenantMegaMenuState> {
    constructor() {
        super();
        this.state = {
            tabIndex: -1,
            panelHeight: {
                height: 0,
                opacity: 0.3
            }
        };
      }
    
    private _tabsListItemtMenuItem(menuItem: SPTermStore.ISPTermObject) : any {
        let tab = null;

        tab = (menuItem.terms.length > 0) ? <Tab className={styles.tab}>{menuItem.name}</Tab> : 
            <li className={styles.tab}><a href={menuItem.localCustomProperties["_Sys_Nav_SimpleLinkUrl"]}>{menuItem.name}</a></li>;

        return tab;
    }

    private _tabsPanelMenuItems(menuItem: SPTermStore.ISPTermObject) : any {
        return (
            <TabPanel className={styles.tabPanel} selectedClassName={styles.tabPanelSelected}>
                <ul>
                    {
                        menuItem.terms.map((t) => {
                            return <li>{t.name}</li>;
                        })
                    }
                </ul>
            </TabPanel>
        );
    }

    private _handleSelect(index: number, lastIndex: number) {
        if(index != lastIndex){
            this.setState({
                tabIndex: index,
                panelHeight: {
                    height: 200,
                    opacity: 1
                }
            });
        }
        else{
            this.setState({
                tabIndex: -1,
                panelHeight: {
                    height: 0,
                    opacity: 0.3
                }
            });
        }
    } 
    
    public render(): React.ReactElement<ITenantMegaMenuProps> {
        const tabListItems: any = this.props.menuItems.map((i) => {
            return(this._tabsListItemtMenuItem(i));
        });

        const tabPanelItems: any = this.props.menuItems.map((i) => {
            return((i.terms.length > 0) ? this._tabsPanelMenuItems(i) : null);
        });

        return (
            <Tabs className={styles.reactTabs} selectedIndex={this.state.tabIndex} onSelect={(index,lastIndex) => this._handleSelect(index,lastIndex)}>
                <TabList className={styles.tabList} >
                    {tabListItems}
                </TabList>
                <div className={styles.tabPanelOuter} style={this.state.panelHeight}>
                    {tabPanelItems}
                </div>
            </Tabs>
        );
    }    
}