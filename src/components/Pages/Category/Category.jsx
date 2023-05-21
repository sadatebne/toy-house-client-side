import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowCategory from './ShowCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const [categories, setCategories] = useState([])
    const [activeTab, setActiveTab] = useState("Marvel")

    const handleTab = (tabName) => {
        setActiveTab(tabName)
    }

    useEffect(() => {
        fetch(`https://toy-house-server-blond.vercel.app/allToys`)
            .then(res => res.json())
            .then(datas => {
                const result = datas.filter(data => data.category == activeTab)
                setCategories(result)
            })
    }, [activeTab])

    //console.log(activeTab)
    //console.log(categories)

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <Tabs>
                <TabList>
                    <Tab>Actions Toy</Tab>
                </TabList>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => handleTab("Marvel")}>Marvel</Tab>
                            <Tab onClick={() => handleTab("DC")}>DC</Tab>
                            <Tab onClick={() => handleTab("StarWars")}>Star War</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {
                                    categories.map(category => <ShowCategory key={category._id} category={category}></ShowCategory>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {
                                    categories.map(category => <ShowCategory key={category._id} category={category}></ShowCategory>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {
                                    categories.map(category => <ShowCategory key={category._id} category={category}></ShowCategory>)
                                }
                            </div>
                        </TabPanel>

                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;