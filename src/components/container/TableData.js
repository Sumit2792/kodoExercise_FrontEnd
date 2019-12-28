import React from "react";
import { connect } from "react-redux";
import {TableDataList} from "../presentational";
import {Pagination}  from '../../helpers';
import paginateAction from '../actions/paginate-action';
import { bindActionCreators } from 'redux';

const TableData = (props) => {
    const indexOfLastPost = props.setCurrentPage * props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
    const currentPosts = props.rowData.slice(indexOfFirstPost,indexOfLastPost);
    
    return (
        <div>
        <TableDataList rowsData={currentPosts} />
        <Pagination postsPerPage = {props.postsPerPage}  totalPosts= {props.rowData.length} paginate={props.paginateAction}/>
        </div>
    );
  }

const mapStateToProps = state => {
    return {
        rowData: state.userData,
        loading: state.paginationData.loading,
        currentPage: state.paginationData.currentPage,
        postsPerPage: state.paginationData.postsPerPage,
        setCurrentPage: state.paginationData.setCurrentPage
    };
  };

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({paginateAction : paginateAction}, dispatch)
  }

  export default connect(mapStateToProps,mapDispatchToProps)(TableData);