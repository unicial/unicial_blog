import { Grid } from "@material-ui/core";
import LatestArticle from "../../components/LatestArticle/LatestArticle";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import CommonBtn from "../../components/Base/CommonBtn";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function AllArticles() {
  return (
    <>
      <div className="c-allArticlesRoot">
        <LatestArticle />
        <div className="c-allArticles-photoesContainer">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard />
            </Grid>
          </Grid>
        </div>
        <div className="c-allArticles-loadMoreBtnRoot">
          <div className="c-allArticles-loadMoreBtnContainer">
            <CommonBtn letter="LOAD MORE">
              <ArrowRightAltIcon />
            </CommonBtn>
          </div>
        </div>
      </div>
    </>
  );
}
