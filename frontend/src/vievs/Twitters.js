import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GridTemplates from "../templates/GridTemplates";
import Card from "../components/molecules/Card/Card";
import { fetchItems } from "../actions";

const Twitters = ({ fetchTwitters, twitters }) => {
  useEffect(() => {
    fetchTwitters();
  }, []);

  return (
    <GridTemplates>
      {twitters.map(({ title, content, twitterName, _id: id }) => (
        <Card
          id={id}
          title={title}
          content={content}
          twitterName={twitterName}
          key={id}
        />
      ))}
    </GridTemplates>
  );
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired
    })
  )
};

Twitters.defaultProps = {
  twitters: []
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItems("twitters"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitters);
