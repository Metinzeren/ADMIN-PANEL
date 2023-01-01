import { gql } from "@apollo/client";

export const ITEM_QUERY = gql`
  query {
    items {
      category
      description
      id
      image
      name
      price
      stock
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation ($id: Int!) {
    delete_items_by_pk(id: $id) {
      category
      description
      id
      image
      name
      price
      stock
    }
  }
`;
export const ADD_ITEM = gql`
  mutation addItem($data: items_insert_input!) {
    insert_items_one(object: $data) {
      id
      name
      price
      stock
      image
      description
      category
    }
  }
`;

export const GET_HOTELS = gql`
  query {
    hotels {
      image
      latitude
      id
      name
      roomCount
      longitude
    }
  }
`;
