import BaseTable from "../Base/BaseTable";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import Link from "../Link/Link";
import moment from "moment";

// interface BlogTableProps {
//   rows?: any;
//   columns?: any;
// }

export default function BlogTable({ rows }) {
  const tableRows = rows?.map((row, key) => (
    <Link
      href="/[contentType]/[slug]"
      as={`/${row.sys.contentType.sys.id}/${row.fields.slug}`}
      key={key}
    >
      <TableRow className="c-blogTable-tableRow">
        <TableCell
          className={clsx("c-blogTable-tableCell", "c-blogTable-tableDateCell")}
        >
          {moment(row.fields.date).format("MMMM DD , YYYY")}
          {/* {moment(row.fields.date).format("YYYYMMDD")} */}
        </TableCell>
        <TableCell
          className={clsx(
            "c-blogTable-tableCell",
            "c-blogTable-tableTitleCell"
          )}
        >
          {row.fields.title}
        </TableCell>
        <TableCell
          className={clsx(
            "c-blogTable-tableCell",
            "c-blogTable-tableImageCell"
          )}
        >
          {
            <div className="c-blogTable-imgContainer">
              <img
                src={row?.fields.coverImage?.fields?.file?.url}
                className="c-blogTable-img"
              />
            </div>
          }
        </TableCell>
      </TableRow>
    </Link>
  ));
  return (
    <>
      <BaseTable rows={tableRows} />
    </>
  );
}
