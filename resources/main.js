// project object

// conditionally create project object
if (typeof(childcare_college_costs_DEC2015) == "undefined") var childcare_college_costs_DEC2015 = {};

// this object is all you should have to modify
childcare_college_costs_DEC2015 = {
    div_id: "childcare_college_costs_map_2015",
    toggle_div_id: "childcare_college_costs_map_2015_toggle_container",
    data: childcare_college_costs_data,
    default_excludes: ["state"],
    // use small multiples instead of default tabs
    //small_multiples: true,
    //popup: false,
    // toggle or small maps to make
    categories: [
        "Percent difference",
        "Infant",
        "4-year-old",
        "School-age",
        "College costs"
        ],
    default_category: "Percent difference",
    // dotted lines
    //dash_array: "3, 3",
    color_range: {
        min: [255, 204, 230],
        max: [102, 0, 52]
    },
    // yellow borders
    geographyConfig: {
        borderColor: "rgb(229, 245, 255)",
        borderWidth: .9
    }
};

/** Shouldn't need to modify from here down **/



// optionally define custom html content for the popup window
childcare_college_costs_DEC2015.popup_html = function (geography, data, obj) {
    var key = obj["color_field"];
    var title = geography.properties.name;
    var data_string = data[key];
    if (key == 'Percent difference') {
        data_string += "%"
    }
    else if (data_string === false) {
        data_string = "No data";
    }
    else {
        data_string = "$" + Trendy.comma(data_string);
    }

    var heading =  "<h5 class='dmmapmaker_popup_heading'>" + title.replace('_', ' ') + "</h5>" ;
    var content = 
        "<div>"
        + "<strong><span class='dmmapmaker_popup_main_value'>"
        + data_string
        + "</span></strong>"
        + "<div>"
        + " " + key 
        + "</div>"
        + "</div>";
        
    // rejigger the left and right position so the box is never smaller than 450px;
    // TODO - add these hacks to the TrendDataMapper popup code
    var width = $("#" + this.div_id).width();

    var actual_width = $("#" + this.div_id + " " + ".datamaps-hoverover").width();

    clearInterval(this.popup_interval);

        var that = this;
        //$("#" + that.div_id + " " + ".datamaps-hoverover").hide();
        this.popup_interval = setInterval(function () {

            $("#" + that.div_id + " " + ".datamaps-hoverover").width(200);
            if ( $("#" + that.div_id + " " + ".datamaps-hoverover").width() 
                + Number($("#" + that.div_id + " " + ".datamaps-hoverover").css("left").replace("px","")) 
                >  $("#" + that.div_id).width()) {

                $("#" + that.div_id + " " + ".datamaps-hoverover").width(200);
                  
   
                $("#" + that.div_id + " " + ".datamaps-hoverover").css("left", 
                    Number( $("#" + that.div_id + " " + ".datamaps-hoverover").css("left").replace("px","")) - 45
                );
                //$("#" + that.div_id + " " + ".datamaps-hoverover").css("right", "10");

            } 

            //$("#" + that.div_id + " " + ".datamaps-hoverover").show();
        } , 100);

        //$("#" + this.div_id + " " + ".datamaps-hoverover").css("right", 10);

    

    $("#" + that.div_id + " " + ".datamaps-hoverover").on("touchend", function () {
        $(this).hide();
    });

    var left = $("#" + this.div_id + " " + ".datamaps-hoverover").css("left");
    var right = $("#" + this.div_id + " " + ".datamaps-hoverover").css("right");
    console.log(left, right, " : ", actual_width, width);

    return heading + content;



};



// initiation function to be called on page load
childcare_college_costs_DEC2015.init = function(obj) {
   
    obj.map = new DmMapMaker( obj);
    
}

// when the page loads, go for it;
jQuery(function () {


    // define $ as jQuery if we need to
    if (typeof(window.$) == "undefined" ) $=jQuery;

    childcare_college_costs_DEC2015.init(childcare_college_costs_DEC2015);
    
    // handle responsiveness from here, for now. DataMaps can be responsive, too
    $(window).resize(function () {
        $("#" + childcare_college_costs_DEC2015.div_id).html();
            childcare_college_costs_DEC2015.init(childcare_college_costs_DEC2015);
    });
});


