import React, { useEffect, useState } from "react";
import Link from "../Link/Link";
import { Box } from "@material-ui/core";
import { Popover, MenuItem } from "@material-ui/core";
import clsx from "clsx";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { getAllAnnouncement } from "../../lib";

export default function AuthorsMenuBar() {
  const [itemName, setitemName] = React.useState(null);
  const [allAuthors, setAllAuthors] = useState();
  const [uniqueAuthors, setUniqueAuthors] = useState();

  useEffect(() => {
    getAllAnnouncement().then((e) => {
      if (e?.length > 0) {
        setAllAuthors(e);
        setitemName(e[0]?.fields.author.fields.name);

        //
        let allAuthorsLength = e?.length !== undefined ? e?.length : 0;
        let uniqueAllAuthors = [];
        let uniqueAllAuthorsSet = new Set();

        for (var i = 0; i < allAuthorsLength; i++) {
          uniqueAllAuthorsSet.add(e[i]?.fields.author.fields.authorId);
        }
        // console.log("uniqueAllAuthorsSet.size", uniqueAllAuthorsSet.size);
        for (var i = allAuthorsLength - 1; i >= 0; i--) {
          if (uniqueAllAuthorsSet.size === 0) break;
          if (uniqueAllAuthorsSet.has(e[i]?.fields.author.fields.authorId)) {
            uniqueAllAuthors.push(e[i]);
          }
          uniqueAllAuthorsSet.delete(e[i].fields.author.fields.authorId);
        }
        setUniqueAuthors(uniqueAllAuthors);
        // console.log("uniqueallauthorsData", uniqueAllAuthors);
      }
      // console.log("no data");
    });
  }, []);

  // console.log("allAuthors", allAuthors);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItem = (index) => {
    // console.log(uniqueAuthors[index]?.fields.author.fields.authorId);
    if (uniqueAuthors) {
      let selItemName =
        uniqueAuthors[index]?.fields.author.fields.authorId !== undefined
          ? uniqueAuthors[index]?.fields.author.fields.authorId
          : null;
      setitemName(selItemName);
      handleClose();
    }
  };

  return (
    <>
      <Box
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Box className="c-author-listRoot">
          <Box className="c-author-listContainer">
            <Box className="c-author-mainLabel">Author</Box>
            {anchorEl ? (
              <ArrowDropUpIcon className="c-author-dropdownIcon" />
            ) : (
              <ArrowDropDownIcon className="c-author-dropdownIcon" />
            )}
          </Box>
        </Box>
      </Box>
      <Popover
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="c-author-popover"
        style={{ top: "18px" }}
      >
        {uniqueAuthors?.map((item, index) => (
          <MenuItem
            onClick={() => handleItem(index)}
            key={index}
            className="c-author-menuItem"
          >
            <Link
              href="/author/[slug]"
              as={`/author/${item.fields.author.fields.slug}`}
            >
              <Box className="c-author-listContainer">
                <img
                  src={item.fields.author.fields.image.fields.file.url}
                  className="c-author-imgContainer"
                />
                <Box
                  className={clsx("c-author-listLabel", {
                    ["c-author-activeListLabel"]: itemName === item.name,
                  })}
                >
                  {item.fields.author.fields.name}
                </Box>
              </Box>
            </Link>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}