(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a89ab6"],{"0e96":function(e,a,t){},"9b5a":function(e,a,t){"use strict";t("0e96")},c66d:function(e,a,t){"use strict";t.r(a);var s=t("7a23");const l={class:"profile-container"},c={class:"profile-header"},n={class:"avatar-section"},o={key:0,class:"avatar"},r=["src","alt"],i={key:1,class:"avatar placeholder"},d={class:"profile-info"},b={class:"join-date"},u={class:"profile-content"},h={class:"profile-section"},O={class:"form-group"},j={class:"input-wrapper"},p={class:"form-group"},m={class:"input-wrapper"},f={class:"form-group"},v={class:"input-wrapper"},g={class:"form-group"},y={class:"input-wrapper"},w=["value"],U=["disabled"],_={class:"profile-section"},k={class:"stats-grid"},C={class:"stat-card"},D={class:"stat-info"},P={class:"stat-value"},N={class:"stat-card"},z={class:"stat-info"},I={class:"stat-value"},M={class:"stat-card"},x={class:"stat-info"},A={class:"stat-value"},V={class:"profile-section"},G={class:"settings-list"},S={class:"setting-item"},q={class:"toggle"},L={class:"setting-item"},T={class:"toggle"},E={class:"setting-item"},$={class:"toggle"},F={class:"profile-section danger-zone"},J={class:"danger-actions"},Y={class:"danger-item"},Q={class:"danger-item"};function W(e,a,t,W,B,H){const K=Object(s["C"])("Modal");return Object(s["w"])(),Object(s["g"])("div",l,[Object(s["h"])("div",c,[Object(s["h"])("div",n,[W.avatar_url?(Object(s["w"])(),Object(s["g"])("div",o,[Object(s["h"])("img",{src:W.avatar_url,alt:W.username},null,8,r)])):(Object(s["w"])(),Object(s["g"])("div",i,a[13]||(a[13]=[Object(s["h"])("span",{class:"material-symbols-rounded"},"person",-1)]))),Object(s["h"])("button",{class:"change-avatar",onClick:a[0]||(a[0]=(...e)=>W.triggerImageUpload&&W.triggerImageUpload(...e))},a[14]||(a[14]=[Object(s["h"])("span",{class:"material-symbols-rounded"},"add_a_photo",-1)])),Object(s["h"])("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:a[1]||(a[1]=(...e)=>W.handleImageUpload&&W.handleImageUpload(...e))},null,544)]),Object(s["h"])("div",d,[Object(s["h"])("h1",null,Object(s["G"])(W.username||W.email),1),Object(s["h"])("p",b,"Member since "+Object(s["G"])(W.formatDate(W.created_at)),1)])]),Object(s["h"])("div",u,[Object(s["h"])("div",h,[a[24]||(a[24]=Object(s["h"])("h2",null,"Personal Information",-1)),Object(s["h"])("form",{onSubmit:a[5]||(a[5]=Object(s["Q"])((...e)=>W.updateProfile&&W.updateProfile(...e),["prevent"])),class:"profile-form"},[Object(s["h"])("div",O,[a[16]||(a[16]=Object(s["h"])("label",null,"First Name",-1)),Object(s["h"])("div",j,[a[15]||(a[15]=Object(s["h"])("span",{class:"material-symbols-rounded"},"person",-1)),Object(s["O"])(Object(s["h"])("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>W.formData.firstName=e),type:"text",placeholder:"Your first name"},null,512),[[s["L"],W.formData.firstName]])])]),Object(s["h"])("div",p,[a[18]||(a[18]=Object(s["h"])("label",null,"Last Name",-1)),Object(s["h"])("div",m,[a[17]||(a[17]=Object(s["h"])("span",{class:"material-symbols-rounded"},"person",-1)),Object(s["O"])(Object(s["h"])("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>W.formData.lastName=e),type:"text",placeholder:"Your last name"},null,512),[[s["L"],W.formData.lastName]])])]),Object(s["h"])("div",f,[a[20]||(a[20]=Object(s["h"])("label",null,"Username",-1)),Object(s["h"])("div",v,[a[19]||(a[19]=Object(s["h"])("span",{class:"material-symbols-rounded"},"badge",-1)),Object(s["O"])(Object(s["h"])("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>W.formData.username=e),type:"text",placeholder:"Choose a username"},null,512),[[s["L"],W.formData.username]])])]),Object(s["h"])("div",g,[a[22]||(a[22]=Object(s["h"])("label",null,"Email",-1)),Object(s["h"])("div",y,[a[21]||(a[21]=Object(s["h"])("span",{class:"material-symbols-rounded"},"mail",-1)),Object(s["h"])("input",{value:W.email,type:"email",disabled:""},null,8,w)])]),Object(s["h"])("button",{type:"submit",disabled:W.loading,class:"submit-button"},a[23]||(a[23]=[Object(s["h"])("span",{class:"material-symbols-rounded"},"save",-1),Object(s["j"])(" Save Changes ")]),8,U)],32)]),Object(s["h"])("div",_,[a[31]||(a[31]=Object(s["h"])("h2",null,"Collection Overview",-1)),Object(s["h"])("div",k,[Object(s["h"])("div",C,[a[26]||(a[26]=Object(s["h"])("span",{class:"material-symbols-rounded"},"style",-1)),Object(s["h"])("div",D,[Object(s["h"])("span",P,Object(s["G"])(W.stats.total_cards||0),1),a[25]||(a[25]=Object(s["h"])("span",{class:"stat-label"},"Total Cards",-1))])]),Object(s["h"])("div",N,[a[28]||(a[28]=Object(s["h"])("span",{class:"material-symbols-rounded"},"diamond",-1)),Object(s["h"])("div",z,[Object(s["h"])("span",I,"$"+Object(s["G"])(W.formatPrice(W.stats.total_value)),1),a[27]||(a[27]=Object(s["h"])("span",{class:"stat-label"},"Collection Value",-1))])]),Object(s["h"])("div",M,[a[30]||(a[30]=Object(s["h"])("span",{class:"material-symbols-rounded"},"category",-1)),Object(s["h"])("div",x,[Object(s["h"])("span",A,Object(s["G"])(W.stats.unique_cards||0),1),a[29]||(a[29]=Object(s["h"])("span",{class:"stat-label"},"Unique Cards",-1))])])])]),Object(s["h"])("div",V,[a[38]||(a[38]=Object(s["h"])("h2",null,"Notification Settings",-1)),Object(s["h"])("div",G,[Object(s["h"])("div",S,[a[33]||(a[33]=Object(s["h"])("div",{class:"setting-info"},[Object(s["h"])("h3",null,"Price Alerts"),Object(s["h"])("p",null,"Get notified when cards in your collection change in value")],-1)),Object(s["h"])("label",q,[Object(s["O"])(Object(s["h"])("input",{type:"checkbox","onUpdate:modelValue":a[6]||(a[6]=e=>W.notifications.priceAlerts=e)},null,512),[[s["I"],W.notifications.priceAlerts]]),a[32]||(a[32]=Object(s["h"])("span",{class:"toggle-slider"},null,-1))])]),Object(s["h"])("div",L,[a[35]||(a[35]=Object(s["h"])("div",{class:"setting-info"},[Object(s["h"])("h3",null,"Collection Updates"),Object(s["h"])("p",null,"Notifications about your collection statistics")],-1)),Object(s["h"])("label",T,[Object(s["O"])(Object(s["h"])("input",{type:"checkbox","onUpdate:modelValue":a[7]||(a[7]=e=>W.notifications.collectionUpdates=e)},null,512),[[s["I"],W.notifications.collectionUpdates]]),a[34]||(a[34]=Object(s["h"])("span",{class:"toggle-slider"},null,-1))])]),Object(s["h"])("div",E,[a[37]||(a[37]=Object(s["h"])("div",{class:"setting-info"},[Object(s["h"])("h3",null,"Market Trends"),Object(s["h"])("p",null,"Weekly market analysis and trending cards")],-1)),Object(s["h"])("label",$,[Object(s["O"])(Object(s["h"])("input",{type:"checkbox","onUpdate:modelValue":a[8]||(a[8]=e=>W.notifications.marketTrends=e)},null,512),[[s["I"],W.notifications.marketTrends]]),a[36]||(a[36]=Object(s["h"])("span",{class:"toggle-slider"},null,-1))])])])]),Object(s["h"])("div",F,[a[43]||(a[43]=Object(s["h"])("h2",null,"Account Settings",-1)),Object(s["h"])("div",J,[Object(s["h"])("div",Y,[a[40]||(a[40]=Object(s["h"])("div",{class:"danger-info"},[Object(s["h"])("h3",null,"Change Password"),Object(s["h"])("p",null,"Update your account password")],-1)),Object(s["h"])("button",{class:"danger-button secondary",onClick:a[9]||(a[9]=e=>W.showChangePasswordModal=!0)},a[39]||(a[39]=[Object(s["h"])("span",{class:"material-symbols-rounded"},"lock",-1),Object(s["j"])(" Change Password ")]))]),Object(s["h"])("div",Q,[a[42]||(a[42]=Object(s["h"])("div",{class:"danger-info"},[Object(s["h"])("h3",null,"Delete Account"),Object(s["h"])("p",null,"Permanently delete your account and data")],-1)),Object(s["h"])("button",{class:"danger-button",onClick:a[10]||(a[10]=e=>W.showDeleteModal=!0)},a[41]||(a[41]=[Object(s["h"])("span",{class:"material-symbols-rounded"},"delete",-1),Object(s["j"])(" Delete Account ")]))])])])]),W.showChangePasswordModal?(Object(s["w"])(),Object(s["e"])(K,{key:0,onClose:a[11]||(a[11]=e=>W.showChangePasswordModal=!1)})):Object(s["f"])("",!0),W.showDeleteModal?(Object(s["w"])(),Object(s["e"])(K,{key:1,onClose:a[12]||(a[12]=e=>W.showDeleteModal=!1)})):Object(s["f"])("",!0)])}var B=t("79a7"),H=t("889e"),K={name:"Profile",setup(){const e=Object(s["z"])(null),a=Object(s["z"])(!1),t=Object(s["z"])(null),l=Object(s["z"])(null),c=Object(s["z"])(""),n=Object(s["z"])(""),o=Object(s["z"])(null),r=Object(s["z"])({}),i=Object(s["z"])({firstName:"",lastName:"",username:""}),d=Object(s["z"])({priceAlerts:!0,collectionUpdates:!0,marketTrends:!1}),b=Object(s["z"])(!1),u=Object(s["z"])(!1),h=async()=>{try{const{data:e,error:a}=await B["a"].from("profiles").select("*").eq("id",H["a"].state.user.id).single();if(a)throw a;c.value=e.username,l.value=e.avatar_url,o.value=e.created_at,n.value=H["a"].state.user.email,i.value={username:e.username,firstName:e.first_name||"",lastName:e.last_name||""};const{data:t}=await B["a"].rpc("get_collection_stats",{user_id:H["a"].state.user.id});r.value=t[0]}catch(e){console.error("Error loading profile:",e)}},O=async()=>{a.value=!0,t.value=null;try{const{error:e}=await B["a"].from("profiles").update({username:i.value.username,first_name:i.value.firstName,last_name:i.value.lastName,updated_at:new Date}).eq("id",H["a"].state.user.id);if(e)throw e;await H["a"].loadUserProfile(),await h()}catch(e){t.value=e.message}finally{a.value=!1}},j=async e=>{try{a.value=!0;const t=e.target.files[0],s=t.name.split(".").pop(),c=`${H["a"].state.user.id}/avatar.${s}`,{error:n}=await B["a"].storage.from("avatars").upload(c,t,{upsert:!0});if(n)throw n;const{data:{publicUrl:o}}=B["a"].storage.from("avatars").getPublicUrl(c);await B["a"].from("profiles").update({avatar_url:o}).eq("id",H["a"].state.user.id),l.value=o}catch(t){console.error("Error uploading image:",t)}finally{a.value=!1}},p=()=>{e.value.click()},m=e=>new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"}),f=e=>Number(e||0).toFixed(2);return Object(s["u"])(()=>{h()}),{fileInput:e,loading:a,error:t,avatar_url:l,username:c,email:n,created_at:o,formData:i,stats:r,notifications:d,showChangePasswordModal:b,showDeleteModal:u,updateProfile:O,handleImageUpload:j,triggerImageUpload:p,formatDate:m,formatPrice:f}}},R=(t("9b5a"),t("6b0d")),X=t.n(R);const Z=X()(K,[["render",W],["__scopeId","data-v-758d529c"]]);a["default"]=Z}}]);
//# sourceMappingURL=chunk-28a89ab6.467ac223.js.map