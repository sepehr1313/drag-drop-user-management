import fetch from "../api/fetch";

export const FETCH_GROUPS = "FETCH_GROUPS";
export const GROUPS_REQUESTED = "GROUPS_REQUESTED";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUPS_ERROR = "RECEIVE_GROUPS_ERROR";
export const ADD_GROUP = "ADD_GROUP";
export const SEARCH_GROUP = "SEARCH_GROUP";
export const CANCEL_GROUP_SEARCH = "CANCEL_GROUP_SEARCH";
export const REMOVE_USER_FROM_GROUP = "REMOVE_USER_FROM_GROUP";
export const REMOVE_USER_FROM_ACTIVE_GROUP = "REMOVE_USER_FROM_ACTIVE_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";
export const ADD_USER_TO_GROUP = "ADD_USER_TO_GROUP";
export const FETCH_USERS_IN_GROUP = "FETCH_USERS_IN_GROUP";
export const REQUESTED_USERS_FOR_GROUP = "REQUESTED_USERS_FOR_GROUP";
export const RECEIVE_USERS_FOR_GROUP = "RECEIVE_USERS_FOR_GROUP";
export const UPDATE_ACTIVE_GROUP = "UPDATE_ACTIVE_GROUP";
export const SHOW_USER_GROUPS = "SHOW_USER_GROUPS";
export const REMOVE_USER_FROM_ALL_GROUPS = "REMOVE_USER_FROM_ALL_GROUPS";

export function groupsRequested() {
  return {
    type: GROUPS_REQUESTED
  };
}

export function receiveGroups(groups) {
  return {
    type: RECEIVE_GROUPS,
    groups
  };
}

export function receiveGroupsError(error) {
  return {
    type: RECEIVE_GROUPS_ERROR,
    error
  };
}

export function fetchGroups() {
  return dispatch => {
    dispatch(groupsRequested());

    return fetch.groups().then(groups => {
      dispatch(receiveGroups(groups));
    });
  };
}

export function addGroup(group) {
  return {
    type: ADD_GROUP,
    group
  };
}

export function searchGroup(name) {
  return {
    type: SEARCH_GROUP,
    name
  };
}

export function cancelGroupSearch() {
  return {
    type: CANCEL_GROUP_SEARCH
  };
}

export function removeUserFromActiveGroup(user) {
  return {
    type: REMOVE_USER_FROM_ACTIVE_GROUP,
    user
  };
}

export function removeUserFromGroup(user, group) {
  return {
    type: REMOVE_USER_FROM_GROUP,
    user,
    group
  };
}

export function deleteGroup(group) {
  return {
    type: DELETE_GROUP,
    group
  };
}

export function addUserToGroup(userid, groupid) {
  return {
    type: ADD_USER_TO_GROUP,
    userid,
    groupid
  };
}

export function requestedUsersInGroup(group) {
  return {
    type: REQUESTED_USERS_FOR_GROUP,
    group
  };
}

export function receiveUsersForGroup(group, users) {
  return {
    type: RECEIVE_USERS_FOR_GROUP,
    group,
    users
  };
}

export function fetchUsersInGroup(group) {
  return dispatch => {
    dispatch(requestedUsersInGroup(group));
    dispatch(receiveUsersForGroup(group, group.members));
  };
}

export function updateActiveGroup(group) {
  return {
    type: UPDATE_ACTIVE_GROUP,
    group
  };
}
export function showUserGroups(user) {
  return {
    type: SHOW_USER_GROUPS,
    payload: user.id
  };
}
export function removeUserFromAllGroups(user) {
  return {
    type: REMOVE_USER_FROM_ALL_GROUPS,
    user
  };
}
