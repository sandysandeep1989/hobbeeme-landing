"use client";
import styles from "./page.module.css";
import React, { useState } from "react";

import {
  adsData,
  schData,
  completed,
  pausedAds,
  pendingApprovalAds,
  rejected,
  cancelled,
} from "./data";
import { Ban, EllipsisVertical, Pause, Eye, Play, Pencil } from "lucide-react";
import RightSidebar from "./RightSidebar";
import ExperienceProReject from "./ExperienceProReject";
const tabLabels = [
  "Active",
  "Scheduled",
  "Completed",
  "Paused",
  "Pending Approval",
  "Rejected",
  "Cancelled",
];
const AdsTable = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [isSidebar, SetIsSideBar] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [pauseDialog, setPauseDialog] = useState(false);
  const [curstatus, setCurStatus] = useState("pause");
  

  return (
    <div className={styles.adstable}>
      <div className={styles["tab-container"]}>
        {tabLabels.map((label) => (
          <button
            key={label}
            className={`${styles.tab} ${
              activeTab === label ? styles.active : ""
            }`}
            onClick={() => setActiveTab(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.adsCards}>
        {activeTab === "Active" &&
          adsData.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spotId}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                        <div
                          onClick={() => {
                            setPauseDialog(true);
                            setCurStatus("pause");
                          }}
                          className={styles.item}
                        >
                          <Pause size={16} />
                          <span>Pause</span>
                        </div>
                        <div
                          onClick={() => {
                            setPauseDialog(true);
                            setCurStatus("cancel");
                          }}
                          className={styles.item}
                        >
                          <Ban size={16} />
                          <span>Cancel</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.class}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>View</span>
                    <span className={styles.adsspandiv}>{data.views}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Clicks</span>
                    <span className={styles.adsspandiv}>{data.clicks}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.budget}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "Scheduled" &&
          schData.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spotId}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                        <div className={styles.item}>
                          <Ban size={16} />
                          <span>Cancel</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.className}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.price}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "Completed" &&
          completed.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spot}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.class}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>View</span>
                    <span className={styles.adsspandiv}>{data.views}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Clicks</span>
                    <span className={styles.adsspandiv}>{data.clicks}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.spends}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "Paused" &&
          pausedAds.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spot}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                        <div className={styles.item}>
                          <Play size={16} />
                          <span>Resume</span>
                        </div>
                        <div className={styles.item}>
                          <Ban size={16} />
                          <span>Cancelled</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.class}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>View</span>
                    <span className={styles.adsspandiv}>{data.views}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Clicks</span>
                    <span className={styles.adsspandiv}>{data.clicks}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.spends}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "Pending Approval" &&
          pendingApprovalAds.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spot}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                        <div className={styles.item}>
                          <Pencil size={16} />
                          <span>Edit</span>
                        </div>
                        <div className={styles.item}>
                          <Ban size={16} />
                          <span>Cancel</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.class}</span>
                  </div>

                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.spends}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "Rejected" &&
          rejected.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spot}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                        <div className={styles.item}>
                          <Pencil size={16} />
                          <span>Edit & Re-Submit</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.class}</span>
                  </div>

                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.budget}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Remark</span>
                    <span className={styles.adsspandivc}>{data.remark}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {activeTab === "Cancelled" &&
          cancelled.map((data, index) => (
            <div className={styles.adsinnercard} key={index}>
              <img src="/adsposter/adsposter.svg" alt="poster" />
              <div className={styles.cardheader}>
                <div className={styles.elipisisicon}>
                  <div className="cardheadertitle">
                    <div className={styles.heading}>{data.title}</div>
                    <div className={styles.paraspot}>{data.spotId}</div>
                  </div>
                  <div className={styles.container}>
                    <button
                      className={styles.trigger}
                      onClick={() =>
                        setOpenDropdownIndex(
                          openDropdownIndex === index ? null : index
                        )
                      }
                    >
                      <EllipsisVertical size={24} />
                    </button>

                    {openDropdownIndex === index && (
                      <div className={styles.menu}>
                        <div
                          onClick={() => {
                            SetIsSideBar(true);
                          }}
                          className={styles.item}
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.cardsborder}></div>
                <div className={styles.cardlowercon}>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Class</span>
                    <span className={styles.adsspandiv}>{data.class}</span>
                  </div>

                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Spend</span>
                    <span className={styles.adsspandiv}>{data.budget}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Date Range</span>
                    <span className={styles.adsspandiv}>{data.dateRange}</span>
                  </div>
                  <div className={styles.cardlowerdiv}>
                    <span className={styles.adsspan}>Remark</span>
                    <span className={styles.adsspandivc}>{data.remark}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <RightSidebar
        isOpen={isSidebar}
        setIsOpen={SetIsSideBar}
        data={activeTab}
      />
      <ExperienceProReject
        open={pauseDialog}
        onOpenChange={setPauseDialog}
        status={curstatus}
      />
    </div>
  );
};

export default AdsTable;
