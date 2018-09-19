if (process.env.AUTOMIGRATE == 'yes'){ //docker variable
//solo parece funcionar con modelos definidos en models, lo que igual hay q hacer
// las lineas siguientes no irian ya que tomaria todos.
//Esto fue porque quise cambiar el datasource de los builtin a postgres
// y parece q por eso da error Cannot read property 'automigrate' of undefined (ademas recordar de sacar el script build de crear usuario que no aplicaria porque no hay schema aun)
//  const User = app.models.User;
//  const Role = app.models.Role;
//  const AccessToken = app.models.AccessToken;
//  const ACL = app.models.ACL;
//  const RoleMapping = app.models.RoleMapping;

  module.exports = function (app) {
    app.dataSources.postgres.automigrate();
    console.log("Performed automigration.");
  }
}

