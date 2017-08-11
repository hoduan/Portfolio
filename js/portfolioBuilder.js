const header = {
    "logo": "img/logo.jpg",
    "name": "Hongyu Duan",
    "profile": "front-end ninija"

};

const body = {
    "picture": "img/pic.jpg"
};

const work = {
    "works":[
        {
            "pname" : "Logs Analysis",
            "github" : "https://github.com/hoduan/LogsAnalysis",
            "picture": "img/reporting.jpg"
        },
        {
            "pname" : "Store-REST-API",
            "github" : "https://github.com/hoduan/Store-REST-API",
            "picture": "img/rest.jpg    "
        },
        {
            "pname" : "VPN",
            "github" : "https://github.com/hoduan/VPN",
            "picture": "img/vpn.jpg" 
        }
    ]
};

const contact = {
    "mail": "testing@gmail.com",
    "twitter": "img/twitter.jpg",
    "facebook": "img/facebook.jpg",
};

if(header != null) {
    header.display = () => {
        var formattedLogo = HTMLheaderLogo.replace("%data%", header.logo);
        $("#header").append(formattedLogo);

        var formattedName = HTMLheaderName.replace("%data%", header.name);
        var formattedPro = HTMLheaderProfile.replace("%data%", header.profile);

        $("#header").append(HTMLheaderNamePro);
        $("#name").append(formattedName);
        $("#name").append(formattedPro);
    };
    header.display();
}

if(body != null) {
    body.display = () => {
        var formattedBodyPic = HTMLbodyPic.replace("%data%", body.picture);
        if(body.picture != "") {
            $("#mainbody").append(formattedBodyPic);
        } 
    };
    body.display();
}

if(work != null) {
    work.display = () => {
        for(var i = 0; i < work.works.length; i++) {
            $("#featuredwork").append(HTMLworkStart);
            var formattedWorkPic = HTMLworkPic.replace("%data%", work.works[i].picture);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.works[i].pname);
            var formattedWorkLink = HTMLworkLink.replace("%data%", work.works[i].github);
            formattedWorkLink = formattedWorkLink.replace("%data%", work.works[i].github);
            $(".col-md-4:last").append(formattedWorkPic);
            $(".col-md-4:last").append(formattedWorkTitle);
            $(".col-md-4:last").append(formattedWorkLink);
        }
    };
    work.display();
}

if(contact != null) {
    contact.display = () => {
        var formattedEmail = HTMLfooterEmail.replace("%data%", contact.mail);
        var formattedFacebook = HTMLfooterFacebook.replace("%data%", contact.facebook);
        var formattedTwitter = HTMLfooterTwitter.replace("%data%", contact.twitter);
        $("#contact").append(formattedEmail);
        $("#contact").append(formattedFacebook);
        $("#contact").append(formattedTwitter);
    };
    contact.display();
}