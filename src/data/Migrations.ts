import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {
  public printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };

  public createTables = () =>
    this.connection
      .raw(
        `
     
   `
      )
      .then(() => {
        console.log("Tabelas criadas");
      })
      .catch(this.printError);

  public closeConnection = () => {
    this.connection.destroy();
  };
}

const myMigrations = new Migrations();

myMigrations.createTables().finally(myMigrations.closeConnection);
