import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComic } from '../actions/index';
import styled from 'styled-components';

const DivComic = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

const DailyComic = ({ getComic, isFetching, comic, error, issue }) => {
  useEffect(() => {
    getComic();
  }, []);

  // const randomComic = e => {
  //   e.preventDefault();
  //   const randomIssue = Math.floor(Math.Random * issue);
  //   useEffect(() => {
  //     getRandomComic(randomIssue);
  //   }, []);

  if (isFetching) {
    return <h1>Hello, fetching your comic</h1>;
  }

  return (
    <>
      <DivComic>
        <h2 key={comic.num}>{comic.safe_title}</h2>
        <img src={comic.img} alt={comic.alt} />
        <p>{comic.alt}</p>

        <h4>{error}</h4>
      </DivComic>
    </>
  );
};

const mapStateToProps = (state) => ({
  comic: state.comic,
  error: state.error,
  isFetching: state.isFetching,
  issue: state.issue
});

export default connect(
  mapStateToProps,
  { getComic }
)(DailyComic);
