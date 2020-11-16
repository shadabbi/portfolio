import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import classes from "./Projects.module.scss";

function Projects() {
  return (
    <section className={classes.projects}>
      <div className="container py-5 my-5">
        <h3 className="text-color-heading section-heading animate__animated  heading-2">
          PROJECTS
        </h3>
        <div className="">
          <Tabs selectedTabClassName={classes.active}>
            <TabList className={classes.tabs}>
              <Tab>
                <h4>ALL</h4>
              </Tab>
              <Tab>
                <h4>JAVASCRIPT</h4>
              </Tab>
              <Tab>
                <h4>REACTJS</h4>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="row mt-5">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row mt-5">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row mt-5">
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1579389082947-e54d8e911928?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1528579702743-625c70fa5d06?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MDYzNH0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>

    // <div>
    //   <Tabs>
    //     <TabList>
    //       <Tab>Title 1</Tab>
    //       <Tab>Title 2</Tab>
    //     </TabList>

    //     <TabPanel>
    //       <h2>Any content 1</h2>
    //     </TabPanel>
    //     <TabPanel>
    //       <h2>Any content 2</h2>
    //     </TabPanel>
    //   </Tabs>
    // </div>
  );
}

export default Projects;
