!function(){"use strict";!function($,e,a){(new function(){var t=this;this.init=function(){e.ppFormRecaptchaLoadCallback=this.recaptcha_processing,$(".pp-del-profile-avatar").click(this.delete_avatar),$(".pp-del-cover-image").click(this.delete_profile_image_cover),$(document).on("click",".has-password-visibility-icon .pp-form-material-icons",this.toggle_password_visibility),$(document.body).on("click","a.showlogin",(function(){$(".pp_wc_login").slideToggle()})),$(e).on("load resize",(function(){t.defaultUserProfileResponsive()})),"true"!==pp_ajax_form.disable_ajax_form&&($(document).on("submit",'form[data-pp-form-submit="login"]',this.ajax_login),$(document).on("submit",'form[data-pp-form-submit="signup"]',this.ajax_registration),$(document).on("submit",'form[data-pp-form-submit="passwordreset"]',this.ajax_password_reset),$(document).on("submit",'form[data-pp-form-submit="editprofile"]',this.ajax_edit_profile))},this.recaptcha_processing=function(){$(".pp-g-recaptcha").each((function(e,a){var s=$(a).attr("data-sitekey"),r=$(this).parents(".pp-form-container").find("form");if("v3"===$(a).attr("data-type"))r.find("input.pp-submit-form").on("click",(function(e){e.preventDefault(),t._add_processing_label(r),grecaptcha.ready((function(){grecaptcha.execute(s,{action:"form"}).then((function(e){r.find('[name="g-recaptcha-response"]').remove(),r.append($("<input>",{type:"hidden",value:e,name:"g-recaptcha-response"})),r.submit()}))}))}));else{var i=grecaptcha.render(a,{sitekey:s,theme:$(a).attr("data-theme"),size:$(a).attr("data-size")});r.on("pp_form_submitted",(function(){grecaptcha.reset(i)}))}}))},this.toggle_password_visibility=function(e){e.preventDefault();var a=$(this).parents(".pp-form-field-input-textarea-wrap").find(".pp-form-field");"password"===a.attr("type")?(a.attr("type","text"),$(this).text("visibility_off")):(a.attr("type","password"),$(this).text("visibility"))},this.ajax_edit_profile=function(a){if(void 0!==e.FormData&&e.FormData){a.preventDefault();var s=$('form[data-pp-form-submit="editprofile"]'),r=t.get_melange_id(s),i=new FormData(this);i.append("action","pp_ajax_editprofile"),i.append("nonce",pp_ajax_form.nonce),i.append("melange_id",r),$(".profilepress-edit-profile-status").remove(),$(".profilepress-edit-profile-success").remove(),""!==e.edit_profile_msg_class&&$("."+e.edit_profile_msg_class).remove(),t._add_processing_label(s),$.post({url:pp_ajax_form.ajaxurl,data:i,cache:!1,contentType:!1,enctype:"multipart/form-data",processData:!1,dataType:"json",success:function(a){s.trigger("pp_form_submitted"),s.trigger("pp_form_edit_profile_success",[s]),"avatar_url"in a&&""!==a.avatar_url&&($("img[data-del='avatar'], img.pp-user-avatar").attr("src",a.avatar_url),$("input[name=eup_avatar]",s).val("")),"cover_image_url"in a&&""!==a.cover_image_url&&($("img[data-del='cover-image'], img.pp-user-cover-image").attr("src",a.cover_image_url),$("input[name=eup_cover_image]",s).val(""),$(".profilepress-myaccount-has-cover-image",s).show(),$(".profilepress-myaccount-cover-image-empty",s).hide()),"message"in a&&(e.edit_profile_msg_class=$(a.message).attr("class"),s.before(a.message)),"redirect"in a&&(s.trigger("pp_edit_profile_success_before_redirect"),e.location.assign(a.redirect)),t._remove_processing_label(s)}},"json")}},this.ajax_password_reset=function(e){e.preventDefault();var a=$(this),s=t.get_melange_id(a),r="true"===a.find('input[name="is-pp-tab-widget"]').val(),i={action:"pp_ajax_passwordreset",data:$(this).serialize()+"&melange_id="+s};t._remove_status_notice(),a.parents(".pp-tab-widget-form").prev(".pp-tab-status").remove(),t._add_processing_label(a),$.post(pp_ajax_form.ajaxurl,i,(function(e){if(a.trigger("pp_form_submitted"),"object"!=typeof e)return t._remove_processing_label(a);if("message"in e){if(a.trigger("pp_password_reset_status"),r){var s=e.message.replace("profilepress-reset-status","pp-tab-status");a.parents(".pp-tab-widget-form").before(s)}else a.parents(".lucidContainer").length>0?a.parents(".lucidContainer").before(e.message):a.before(e.message);"status"in e&&!0===e.status&&a.hide(),$('input[name="user_login"]',a).val("")}t._remove_processing_label(a)}),"json")},this.ajax_registration=function(a){if(void 0!==e.FormData&&e.FormData){a.preventDefault();var s=$(this),r=t.get_melange_id(s),i=new FormData(this),p="true"===s.find('input[name="is-pp-tab-widget"]').val();i.append("action","pp_ajax_signup"),i.append("melange_id",r),t._remove_status_notice(),s.parents(".pp-tab-widget-form").prev(".pp-tab-status").remove(),t._add_processing_label(s),$.post({url:pp_ajax_form.ajaxurl,data:i,cache:!1,contentType:!1,enctype:"multipart/form-data",processData:!1,dataType:"json",success:function(a){if(s.trigger("pp_form_submitted"),"object"!=typeof a)return t._remove_processing_label(s);if("message"in a)if(s.trigger("pp_registration_error",[a]),s.trigger("pp_registration_ajax_response",[a]),p){var r=a.message.replace("profilepress-reg-status","pp-tab-status");s.parents(".pp-tab-widget-form").before(r)}else s.parents(".lucidContainer").length>0?s.parents(".lucidContainer").before(a.message):s.before(a.message);else"redirect"in a&&(s.trigger("pp_registration_success",[a]),e.location.assign(a.redirect));t._remove_processing_label(s)}})}},this.ajax_login=function(a){a.preventDefault();var s=$(this),r={action:"pp_ajax_login",data:$(this).serialize()},i="true"===s.find('input[name="is-pp-tab-widget"]').val();t._remove_status_notice(),t._add_processing_label(s),$.post(pp_ajax_form.ajaxurl,r,(function(a){if(s.trigger("pp_form_submitted"),null===a||"object"!=typeof a)return t._remove_processing_label(s);if("success"in a&&!0===a.success&&"redirect"in a)s.trigger("pp_login_form_success"),e.location.assign(a.redirect);else if(s.trigger("pp_login_form_error"),"code"in a&&"pp2fa_auth_code_invalid"==a.code&&s.find(".pp-2fa").show(),i){var r=a.message.replace("profilepress-login-status","pp-tab-status");s.parents(".pp-tab-widget-form").before(r)}else s.parents(".lucidContainer").length>0?s.parents(".lucidContainer").before(a.message):s.before(a.message);t._remove_processing_label(s)}),"json")},this.delete_avatar=function(e){e.preventDefault();var a=$(this).text(),t=$(this);e.preventDefault(),confirm(pp_ajax_form.confirm_delete)&&(t.is("button")&&t.text(pp_ajax_form.deleting_text),$.post(pp_ajax_form.ajaxurl,{action:"pp_del_avatar",nonce:pp_ajax_form.nonce}).done((function(e){"error"in e&&"nonce_failed"===e.error?(t.text(a),alert(pp_ajax_form.deleting_error)):"success"in e&&($("img[data-del='avatar']").attr("src",e.default),t.remove())})))},this.delete_profile_image_cover=function(e){e.preventDefault();var a=$(this).text(),t=$(this);e.preventDefault(),confirm(pp_ajax_form.confirm_delete)&&(t.is("button")&&t.text(pp_ajax_form.deleting_text),$.post(pp_ajax_form.ajaxurl,{action:"pp_del_cover_image",nonce:pp_ajax_form.nonce}).done((function(e){"error"in e&&"nonce_failed"===e.error&&(t.text(a),alert(pp_ajax_form.deleting_error)),"success"in e&&(""!==e.default?($("img[data-del='cover-image']").attr("src",e.default),t.parent().find(".profilepress-myaccount-has-cover-image").show(),t.parent().find(".profilepress-myaccount-cover-image-empty").hide()):(t.parent().find(".profilepress-myaccount-has-cover-image").hide(),t.parent().find(".profilepress-myaccount-cover-image-empty").show()),t.remove())})))},this.get_melange_id=function(e){var t=$("input.pp_melange_id",e).val();return t===a?"":t},this._add_processing_label=function(e){var a=e.find("input[data-pp-submit-label]");a.attr({value:a.data("pp-processing-label"),disabled:"disabled"}).css("opacity",".4")},this._remove_processing_label=function(e){var a=e.find("input[data-pp-submit-label]");a.attr("value",a.data("pp-submit-label")),a.attr({value:a.data("pp-submit-label"),disabled:null}).css("opacity","")},this._remove_status_notice=function(){$(".profilepress-login-status,.pp-tab-status,.profilepress-edit-profile-success,.profilepress-edit-profile-status,.pp-reset-success,.profilepress-reset-status,.profilepress-reg-status").remove()},this.defaultUserProfileResponsive=function(){$(".ppress-default-profile, .pp-member-directory").each((function(){var e=$(this),a=e.width();a<=340?(e.removeClass("ppressui340"),e.removeClass("ppressui500"),e.removeClass("ppressui800"),e.removeClass("ppressui960"),e.addClass("ppressui340")):a<=500?(e.removeClass("ppressui340"),e.removeClass("ppressui500"),e.removeClass("ppressui800"),e.removeClass("ppressui960"),e.addClass("ppressui500")):a<=800?(e.removeClass("ppressui340"),e.removeClass("ppressui500"),e.removeClass("ppressui800"),e.removeClass("ppressui960"),e.addClass("ppressui800")):a<=960?(e.removeClass("ppressui340"),e.removeClass("ppressui500"),e.removeClass("ppressui800"),e.removeClass("ppressui960"),e.addClass("ppressui960")):a>960&&(e.removeClass("ppressui340"),e.removeClass("ppressui500"),e.removeClass("ppressui800"),e.removeClass("ppressui960")),e.css("opacity",1)})),$(".ppress-default-profile-cover, .ppress-default-profile-cover-e").each((function(){var e=$(this),a=Math.round(e.width()/e.data("ratio"))+"px";e.height(a),e.find(".ppress-dpf-cover-add").height(a)}))}}).init()}(jQuery,window,void 0)}();