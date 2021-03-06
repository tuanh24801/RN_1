const SCREEN_ROUTER = {
  MAIN_NAV: "MainNav",
  MAIN_TAB: "MainTab",
  AUTH: "Auth",
  LOGIN: "Login",
  AUTH_LOADING: "AuthLoading",
  REGISTER: "Register",
  WORKFLOW: "WorkflowScreen",
  WORKFLOW_DETAIL: "WorkflowDetail",
  DOCUMENT: 'DocumentScreen',
  DOCUMENT_DETAIL: "DetailDocument",
  CHANGEPASS: 'ChangePass',
  SEARCHDOCUMENT: 'SearchDocument',
  PDF_SCREEN: 'PDFScreen',
  SEARCHRESULT: 'SearchResultDocument',
  WORKFLOW_REPORT: 'WorkflowReport',
  SEARCH_SCREEN: 'SearchScreen',
};
const TYPE_TASK = {
  ASSIGNED_TASK: 0,
  PROCESSED_TASK: 1,
  CC_TASK: 2,
  AUTHORITIED_TASK: 3
};
const TYPE_DETAIL = {
  WORK_FLOW: 1,
  DOCUMENT: 0
}
const ERR_CODE = {
  USER_IS_NOT_AVAILABLE: '001',
  PASSWORD_WRONG: '002',
  SYSTEM_ERR: '009',
  REQUSET_METHOD_WRONG: '013',
  WORKFLOW_EXECUTE_FAIL: '002',
  WORK_ACTION_FOR_NOTE: '003',
}
const ORDER_BY={
  LATEST_DEADLINE:1,
  OLDEST_DEADLINE:2,
  LATEST_CREATE_DATE:3,
  OLDEST_CREATE_DATE:4
}
const PRIORITY={
  SORT_PRIORITY:1,
  SORT_NOT_PRIORITY:0

}
export { SCREEN_ROUTER, TYPE_TASK, ERR_CODE, TYPE_DETAIL,ORDER_BY,PRIORITY };

