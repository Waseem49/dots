const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FullName: { type: String, require: true },
    Email: { type: String, require: true },
    Password: { type: String, require: true },
    // CountryID: { type: mongoose.Schema.Types.ObjectId, ref: "country" },
    // StateID: { type: mongoose.Schema.Types.ObjectId, ref: "state" },
    // CityID: { type: mongoose.Schema.Types.ObjectId, ref: "city" },
    CountryID: String,
    StateID: String,
    CityID: String,
    IsActive: { type: Boolean, default: false },
    LanguagesIDs: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;

/*

ID (int, primary key), FullName (varchar), Email (varchar), Password (varchar), CountryID (int,
foreign key to Country table), StateID (int, foreign key to State table), CityID (int, foreign key to
City table), LanguagesIDs (varchar), IsActive (bit), CreatedDate (datetime), ModifiedDate
(datetime)

*/
