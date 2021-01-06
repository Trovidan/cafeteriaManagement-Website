import React from 'react'
import './Filter.css'

//material ui components

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//material ui icons

import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StarsIcon from '@material-ui/icons/Stars';
import SortIcon from '@material-ui/icons/Sort';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function allyProps(index) {
    return {
        key: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

function Filter(props){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="Filter-Component-body">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                
                indicatorColor="secondary"
                textColor="secondary"
            >
                {
                    FilterCriteria.map((criteria,index)=>{
                        return <Tab 
                            label={criteria.category} 
                            icon={criteria.icon} 
                            classes= {{
                                wrapper: "filter-tab-wrapper"
                            }}
                            {...allyProps(index)} 
                        />
                    })
                }
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </div>
    )
}

const FilterCriteria = [
    {
        category: "Sort By",
        type: "checkbox",
        icon: <SortIcon />,
        filters: [
            {
                label: "Rating",
                value: "Rating"
            },
            {
                label: "Popularity",
                value: "Popularity"
            },
            {
                label: "Specials",
                value: "Specials"
            },
            {
                label: "Price: High to Low",
                value: "Price: High to Low"
            },
            {
                label: "Price: Low to High",
                value: "Price: Low to High"
            },
        ]
    },
    {
        category: "Price",
        type: "Slider",
        icon: <LocalOfferIcon />,
        filters: [
            {
                label: "0",
                value: 0
            },
            {
                label: "100",
                value: 100
            },
            {
                label: "200",
                value: 100
            },
            {
                label: "300",
                value: 100
            },
            {
                label: "400",
                value: 100
            },
            {
                label: "500",
                value: 500
            }, 
            {
                label: "500+",
                value: undefined
            }
        ]
    },
    {
        category: "Rating",
        type: "Slider",
        icon: <StarsIcon />,
        filters: [
            {
                label: "Any",
                value: undefined
            },
            {
                label: "3",
                value: 3
            },
            {
                label: "3.5",
                value: 3.5
            },
            {
                label: "4",
                value: 4
            },
            {
                label: "4.5",
                value: 4.5
            }
        ]
    },
    {
        category: "Cuisine",
        type: "checkbox",
        icon: <LocalDiningIcon />,
        filters: [
            {
                label: "South Indian",
                value: "South_indian"
            },
            {
                label: "Punjabi",
                value: "Punjabi"
            },
            {
                label: "Kashmiri",
                value: "Kashmiri"
            },
            {
                label: "Gujrati",
                value: "Gujrati"
            },
            {
                label: "Bengali",
                value: "Bengali"
            },
            {
                label: "North Indian",
                value: "North_indian"
            },
            {
                label: "Italian",
                value: "Italian"
            },
            {
                label: "French",
                value: "French"
            },
            {
                label: "Chinese",
                value: "Chinese"
            }
        ]
    }
]

export default Filter;