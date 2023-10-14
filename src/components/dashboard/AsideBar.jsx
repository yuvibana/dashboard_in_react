import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import {
    img1,
    CameraSharpIcon,
    CategorySharpIcon,
    DashboardSharpIcon,
    GroupAddSharpIcon,
    AttachMoneySharpIcon,
    GradingSharpIcon,
    SupportIcon
} from '../StaticImages';


export default function AsideBar() {
    return (
        <aside className='AppAsideBar'>
            <nav className='AppMenus'>
                <Link to={'/'} className='logo dflex Itemcenter gapx'> <CameraSharpIcon /> {" "}Dashboard</Link>
                <Link to={'/'} className='dLink dflex Itemcenter gapx'><CategorySharpIcon /> Dashboard</Link>

                <div className="navflex dflex flexdcol jbetween">
                    <div className="accWrapper">
                        <Accordion className='accdiv'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <span className='dflex Itemcenter gapx'><DashboardSharpIcon /> Products</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link to={"/"} className="linkTags dblock ">
                                    Products 1
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accdiv'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <span className='dflex Itemcenter gapx'> <GroupAddSharpIcon />Customers</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link to={"/"} className="linkTags dblock ">
                                    Customers
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accdiv'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <span className='dflex Itemcenter gapx'><AttachMoneySharpIcon />Income</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link to={"/"} className="linkTags dblock ">
                                    Income
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accdiv'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <span className='dflex Itemcenter gapx'><GradingSharpIcon />Promotes</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link to={"/"} className="linkTags dblock">
                                    Promotes
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accdiv'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <span className='dflex Itemcenter gapx'><SupportIcon />Help</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link to={"/"} className="linkTags dblock">
                                    Help
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Link to={"/"} className="avtarflex dflex gapx">
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={img1} />
                        </Stack>
                        <div className="avtardetail ">
                            <span className="name">Evano</span>
                            <p className="degination">Project Manager </p>
                        </div>
                    </Link>
                </div>
            </nav>
        </aside>
    )
}
