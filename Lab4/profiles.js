class profiles {

    constructor(genderIn, usernameIn, imageIn, nameIn, ageIn, descIn, cityIn, stateIn, statusIn, haskidsIn, wantskidsIn, religionIn, typeIn) {
        var gender = genderIn;
        var username = usernameIn;
        var image = imageIn;
        var name = nameIn;
        var age = ageIn;
        var desc = descIn;
        var city = cityIn;
        var state = stateIn;
        var status = statusIn;
        var haskids = haskidsIn;
        var wantskids = wantskidsIn;
        var religion = religionIn;
        var type = typeIn;


        this.getGender = function () {
            return gender;
        };

        this.setGender = function (value) {
            gender = value;
        };

        this.getUsername = function () {
            return username;
        };

        this.setUsername = function (value) {
            username = value;
        };

        this.getImage = function () {
            return image;
        };

        this.setImage = function (value) {
            image = value;
        };

        this.getName = function () {
            return name;
        };

        this.setName = function (value) {
            name = value;
        };

        this.getAge = function () {
            return age;
        };

        this.setAge = function (value) {
            age = value;
        };

        this.getDesc = function () {
            return desc;
        };

        this.setDesc = function (value) {
            desc = value;
        };

        this.getCity = function () {
            return city;
        };

        this.setCity = function (value) {
            city = value;
        };

        this.getState = function () {
            return state;
        };

        this.setState = function (value) {
            state = value;
        };

        this.getStatus = function () {
            return status;
        };

        this.setStatus = function (value) {
            status = value;
        }
        this.getHasKids = function () {
            return haskids;
        };

        this.setHasKids = function (value) {
            haskids = value;
        }
        this.getWantsKids = function () {
            return wantskids;
        };

        this.setWantsKids = function (value) {
            wantskids = value;
        }
        this.getReligion = function () {
            return religion;
        };

        this.setReligion = function (value) {
            religion = value;
        }
        this.getType = function () {
            return type;
        };

        this.setType = function (value) {
            type = value;
        }
    }
}