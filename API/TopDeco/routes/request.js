const { request } = require("express");

let my_request = {};

my_request.price = (request) => {
    request += "WHERE Price BETWEEN ? and ? ";
    return (request);
};

my_request.location = (request, num_clauses) => {
    if (num_clauses == 0) {
        request += "WHERE Location = ? ";
    } else {
        request += "AND Location = ? ";
    }
    return (request);
};

my_request.type = (request, num_clauses) => {
    if (num_clauses == 0) {
        request += "WHERE Title LIKE ? ";
    } else {
        request += "AND Title LIKE ? ";
    }
    return (request);
};

module.exports = my_request;