import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmedEmailMessage from './messages/ConfirmedEmailMessage';
import TopNavigation from '../../components/navigation/TopNavigation';
import { allBooksSelector } from '../../reducers/books';
import AddBookCtA from '../cts/AddBookCtA';

const DashboardPage = ({ isConfirmed, books }) => {
    return (
        <div>
            {!isConfirmed && <ConfirmedEmailMessage />}
            <TopNavigation />

            {books.length === 0 && <AddBookCtA />}
        </div>
    );
};

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
        books: allBooksSelector(state),
    };
}

export default connect(mapStateToProps)(DashboardPage);
