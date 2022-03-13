import BlogTable from "../../BlogTable/BlogTable";
import { announcementTableData } from "../../../config/constant";
import { useState, useEffect } from "react";
import { getAllAnnouncement } from "../../../lib";

export default function Announcements() {
  const [posts, setPosts] = useState<any | undefined>();

  useEffect(() => {
    getAllAnnouncement().then((e: any) => {
      setPosts(e);
    });
  }, []);

  return (
    <>
      <div className="c-announcements-root">
        <div className="c-announcements-headerContainer">
          <div className="c-announcements-headerBigtitle">Announcements</div>
          <div className="c-announcements-headerSmalltitle">
            The latest news from Decentraland.
          </div>
        </div>
        <div className="c-announcements-TableContainer">
          <BlogTable rows={posts} />
        </div>
      </div>
    </>
  );
}
