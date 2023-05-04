import React from 'react'
import { Menu } from '../../Data'
import '../../Scss/MegaMenu.scss'
import Slider from './Slider'
import EasyReturn from './EasyReturn'
const MegaMenu = () => {
    return (
        <div className='main-parent-menu'>
            {/* <div className='mega-menu'>
                {
                    Menu.map((menuitems) => {
                        return (
                            <div className='items'>

                                <span className='main'>
                                    {menuitems.mainitem}
                                </span>

                                <div className="main-sub-cata">
                                    {
                                        menuitems.mainsubcata.map((mainsub) => {
                                            return (
                                                <div>
                                                    <div>
                                                        <a href="">{mainsub.mainsubcataitems}</a>
                                                    </div>
                                                    <div>
                                                        {
                                                            mainsub.subcata.map((sub) => {
                                                                return (
                                                                    <div>
                                                                        <a href="">{sub.subcataitems}</a>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }

                                </div>

                            </div>
                        )
                    })
                }
            </div> */}
            <div>
                <Slider />
            </div>
            <div>
                <EasyReturn />
            </div>

        </div>
    )
}

export default MegaMenu