Ext.define('mobndf.util.Util', {
  singleton: true,
  enablePageAnimations: true,
  
  api : (function() {
    var baseUrl = 'sdata/mobndfValidationPackage';
    return {
      entries: 'resources/data/entries.json',
      getpendingbymonths : baseUrl + '/getPendingByMonths',
      getpendings : baseUrl + '/getPendings',
      getexpense : baseUrl + '/getExpense',
      search : baseUrl + '/search',
      getdashboard : baseUrl + '/getDashboards',
      getcollaborators : baseUrl + '/getCollaborators',
      getcollaborator : baseUrl + '/getCollaborator',
    	charts : baseUrl + '/getNewDashboard'
    }
  })()
  // api : (function() {
  //   var baseUrl = 'https://sagefrp1000.cloudapp.net:443/mobndfmanagers/sdata/mobndfmanagersPackage';
  //   return {
  //     entries: 'resources/data/entries.json',
  //     getpendingbymonths : baseUrl + '/getPendingByMonths',
  //     getpendings : baseUrl + '/getPendings',
  //     getexpense : baseUrl + '/getExpense',
  //     search : baseUrl + '/search',
  //     getdashboard : baseUrl + '/getDashboards',
  //     getcollaborators : baseUrl + '/getCollaborators',
  //     getcollaborator : baseUrl + '/getCollaborator',
  //     charts : baseUrl + '/getNewDashboard'
  //   }
  // })()
});