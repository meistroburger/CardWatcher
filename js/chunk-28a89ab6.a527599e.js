(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a89ab6"],{"0e96":function(e,a,t){},"9b5a":function(e,a,t){"use strict";t("0e96")},c66d:function(e,a,t){"use strict";t.r(a);var s=t("7a23");const l={class:"profile-container"},i={class:"profile-header"},c={class:"avatar-section"},n={key:0,class:"avatar"},o=["src","alt"],r={key:1,class:"avatar placeholder"},d={class:"profile-info"},b={class:"join-date"},u={class:"profile-content"},j={class:"profile-section"},O={class:"form-group"},p={class:"input-wrapper"},m={class:"form-group"},f={class:"input-wrapper"},v={class:"form-group"},g={class:"input-wrapper"},h={class:"form-group"},y={class:"input-wrapper"},w=["value"],k=["disabled"],P={class:"profile-section"},U={class:"stats-grid"},_={class:"stat-card"},A={class:"stat-info"},C={class:"stat-value"},D={class:"stat-card"},N={class:"stat-info"},M={class:"stat-value"},x={class:"stat-card"},I={class:"stat-info"},V={class:"stat-value"},S={class:"profile-section"},q={class:"settings-list"},H={class:"setting-item"},J={class:"toggle"},T={class:"setting-item"},E={class:"toggle"},$={class:"setting-item"},F={class:"toggle"},L={class:"profile-section danger-zone"},Y={class:"danger-actions"},z={class:"danger-item"},G={class:"danger-item"};function R(e,a,t,R,W,B){const K=Object(s["D"])("Modal");return Object(s["x"])(),Object(s["h"])("div",l,[Object(s["i"])("div",i,[Object(s["i"])("div",c,[R.avatar_url?(Object(s["x"])(),Object(s["h"])("div",n,[Object(s["i"])("img",{src:R.avatar_url,alt:R.username},null,8,o)])):(Object(s["x"])(),Object(s["h"])("div",r,a[13]||(a[13]=[Object(s["i"])("span",{class:"material-symbols-rounded"},"person",-1)]))),Object(s["i"])("button",{class:"change-avatar",onClick:a[0]||(a[0]=(...e)=>R.triggerImageUpload&&R.triggerImageUpload(...e))},a[14]||(a[14]=[Object(s["i"])("span",{class:"material-symbols-rounded"},"add_a_photo",-1)])),Object(s["i"])("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:a[1]||(a[1]=(...e)=>R.handleImageUpload&&R.handleImageUpload(...e))},null,544)]),Object(s["i"])("div",d,[Object(s["i"])("h1",null,Object(s["H"])(R.username||R.email),1),Object(s["i"])("p",b,"Member since "+Object(s["H"])(R.formatDate(R.created_at)),1)])]),Object(s["i"])("div",u,[Object(s["i"])("div",j,[a[24]||(a[24]=Object(s["i"])("h2",null,"Personal Information",-1)),Object(s["i"])("form",{onSubmit:a[5]||(a[5]=Object(s["R"])((...e)=>R.updateProfile&&R.updateProfile(...e),["prevent"])),class:"profile-form"},[Object(s["i"])("div",O,[a[16]||(a[16]=Object(s["i"])("label",null,"First Name",-1)),Object(s["i"])("div",p,[a[15]||(a[15]=Object(s["i"])("span",{class:"material-symbols-rounded"},"person",-1)),Object(s["P"])(Object(s["i"])("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>R.formData.firstName=e),type:"text",placeholder:"Your first name"},null,512),[[s["M"],R.formData.firstName]])])]),Object(s["i"])("div",m,[a[18]||(a[18]=Object(s["i"])("label",null,"Last Name",-1)),Object(s["i"])("div",f,[a[17]||(a[17]=Object(s["i"])("span",{class:"material-symbols-rounded"},"person",-1)),Object(s["P"])(Object(s["i"])("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>R.formData.lastName=e),type:"text",placeholder:"Your last name"},null,512),[[s["M"],R.formData.lastName]])])]),Object(s["i"])("div",v,[a[20]||(a[20]=Object(s["i"])("label",null,"Username",-1)),Object(s["i"])("div",g,[a[19]||(a[19]=Object(s["i"])("span",{class:"material-symbols-rounded"},"badge",-1)),Object(s["P"])(Object(s["i"])("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>R.formData.username=e),type:"text",placeholder:"Choose a username"},null,512),[[s["M"],R.formData.username]])])]),Object(s["i"])("div",h,[a[22]||(a[22]=Object(s["i"])("label",null,"Email",-1)),Object(s["i"])("div",y,[a[21]||(a[21]=Object(s["i"])("span",{class:"material-symbols-rounded"},"mail",-1)),Object(s["i"])("input",{value:R.email,type:"email",disabled:""},null,8,w)])]),Object(s["i"])("button",{type:"submit",disabled:R.loading,class:"submit-button"},a[23]||(a[23]=[Object(s["i"])("span",{class:"material-symbols-rounded"},"save",-1),Object(s["k"])(" Save Changes ")]),8,k)],32)]),Object(s["i"])("div",P,[a[31]||(a[31]=Object(s["i"])("h2",null,"Collection Overview",-1)),Object(s["i"])("div",U,[Object(s["i"])("div",_,[a[26]||(a[26]=Object(s["i"])("span",{class:"material-symbols-rounded"},"style",-1)),Object(s["i"])("div",A,[Object(s["i"])("span",C,Object(s["H"])(R.stats.total_cards||0),1),a[25]||(a[25]=Object(s["i"])("span",{class:"stat-label"},"Total Cards",-1))])]),Object(s["i"])("div",D,[a[28]||(a[28]=Object(s["i"])("span",{class:"material-symbols-rounded"},"diamond",-1)),Object(s["i"])("div",N,[Object(s["i"])("span",M,"$"+Object(s["H"])(R.formatPrice(R.stats.total_value)),1),a[27]||(a[27]=Object(s["i"])("span",{class:"stat-label"},"Collection Value",-1))])]),Object(s["i"])("div",x,[a[30]||(a[30]=Object(s["i"])("span",{class:"material-symbols-rounded"},"category",-1)),Object(s["i"])("div",I,[Object(s["i"])("span",V,Object(s["H"])(R.stats.unique_cards||0),1),a[29]||(a[29]=Object(s["i"])("span",{class:"stat-label"},"Unique Cards",-1))])])])]),Object(s["i"])("div",S,[a[38]||(a[38]=Object(s["i"])("h2",null,"Notification Settings",-1)),Object(s["i"])("div",q,[Object(s["i"])("div",H,[a[33]||(a[33]=Object(s["i"])("div",{class:"setting-info"},[Object(s["i"])("h3",null,"Price Alerts"),Object(s["i"])("p",null,"Get notified when cards in your collection change in value")],-1)),Object(s["i"])("label",J,[Object(s["P"])(Object(s["i"])("input",{type:"checkbox","onUpdate:modelValue":a[6]||(a[6]=e=>R.notifications.priceAlerts=e)},null,512),[[s["J"],R.notifications.priceAlerts]]),a[32]||(a[32]=Object(s["i"])("span",{class:"toggle-slider"},null,-1))])]),Object(s["i"])("div",T,[a[35]||(a[35]=Object(s["i"])("div",{class:"setting-info"},[Object(s["i"])("h3",null,"Collection Updates"),Object(s["i"])("p",null,"Notifications about your collection statistics")],-1)),Object(s["i"])("label",E,[Object(s["P"])(Object(s["i"])("input",{type:"checkbox","onUpdate:modelValue":a[7]||(a[7]=e=>R.notifications.collectionUpdates=e)},null,512),[[s["J"],R.notifications.collectionUpdates]]),a[34]||(a[34]=Object(s["i"])("span",{class:"toggle-slider"},null,-1))])]),Object(s["i"])("div",$,[a[37]||(a[37]=Object(s["i"])("div",{class:"setting-info"},[Object(s["i"])("h3",null,"Market Trends"),Object(s["i"])("p",null,"Weekly market analysis and trending cards")],-1)),Object(s["i"])("label",F,[Object(s["P"])(Object(s["i"])("input",{type:"checkbox","onUpdate:modelValue":a[8]||(a[8]=e=>R.notifications.marketTrends=e)},null,512),[[s["J"],R.notifications.marketTrends]]),a[36]||(a[36]=Object(s["i"])("span",{class:"toggle-slider"},null,-1))])])])]),Object(s["i"])("div",L,[a[43]||(a[43]=Object(s["i"])("h2",null,"Account Settings",-1)),Object(s["i"])("div",Y,[Object(s["i"])("div",z,[a[40]||(a[40]=Object(s["i"])("div",{class:"danger-info"},[Object(s["i"])("h3",null,"Change Password"),Object(s["i"])("p",null,"Update your account password")],-1)),Object(s["i"])("button",{class:"danger-button secondary",onClick:a[9]||(a[9]=e=>R.showChangePasswordModal=!0)},a[39]||(a[39]=[Object(s["i"])("span",{class:"material-symbols-rounded"},"lock",-1),Object(s["k"])(" Change Password ")]))]),Object(s["i"])("div",G,[a[42]||(a[42]=Object(s["i"])("div",{class:"danger-info"},[Object(s["i"])("h3",null,"Delete Account"),Object(s["i"])("p",null,"Permanently delete your account and data")],-1)),Object(s["i"])("button",{class:"danger-button",onClick:a[10]||(a[10]=e=>R.showDeleteModal=!0)},a[41]||(a[41]=[Object(s["i"])("span",{class:"material-symbols-rounded"},"delete",-1),Object(s["k"])(" Delete Account ")]))])])])]),R.showChangePasswordModal?(Object(s["x"])(),Object(s["f"])(K,{key:0,onClose:a[11]||(a[11]=e=>R.showChangePasswordModal=!1)})):Object(s["g"])("",!0),R.showDeleteModal?(Object(s["x"])(),Object(s["f"])(K,{key:1,onClose:a[12]||(a[12]=e=>R.showDeleteModal=!1)})):Object(s["g"])("",!0)])}var W=t("79a7"),B=t("889e"),K={name:"Profile",setup(){const e=Object(s["A"])(null),a=Object(s["A"])(!1),t=Object(s["A"])(null),l=Object(s["A"])(null),i=Object(s["A"])(""),c=Object(s["A"])(""),n=Object(s["A"])(null),o=Object(s["A"])({}),r=Object(s["A"])({firstName:"",lastName:"",username:""}),d=Object(s["A"])({priceAlerts:!0,collectionUpdates:!0,marketTrends:!1}),b=Object(s["A"])(!1),u=Object(s["A"])(!1),j=async()=>{try{const{data:e,error:a}=await W["a"].from("profiles").select("*").eq("id",B["a"].state.user.id).single();if(a)throw a;i.value=e.username,l.value=e.avatar_url,n.value=e.created_at,c.value=B["a"].state.user.email,r.value={username:e.username,firstName:e.first_name||"",lastName:e.last_name||""};const{data:t}=await W["a"].rpc("get_collection_stats",{user_id:B["a"].state.user.id});o.value=t[0]}catch(e){console.error("Error loading profile:",e)}},O=async()=>{a.value=!0,t.value=null;try{const{error:e}=await W["a"].from("profiles").update({username:r.value.username,first_name:r.value.firstName,last_name:r.value.lastName,updated_at:new Date}).eq("id",B["a"].state.user.id);if(e)throw e;await B["a"].loadUserProfile(),await j()}catch(e){t.value=e.message}finally{a.value=!1}},p=async e=>{try{a.value=!0;const t=e.target.files[0],s=t.name.split(".").pop(),i=`${B["a"].state.user.id}/avatar.${s}`,{error:c}=await W["a"].storage.from("avatars").upload(i,t,{upsert:!0});if(c)throw c;const{data:{publicUrl:n}}=W["a"].storage.from("avatars").getPublicUrl(i);await W["a"].from("profiles").update({avatar_url:n}).eq("id",B["a"].state.user.id),l.value=n}catch(t){console.error("Error uploading image:",t)}finally{a.value=!1}},m=()=>{e.value.click()},f=e=>new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"}),v=e=>Number(e||0).toFixed(2);return Object(s["v"])(()=>{j()}),{fileInput:e,loading:a,error:t,avatar_url:l,username:i,email:c,created_at:n,formData:r,stats:o,notifications:d,showChangePasswordModal:b,showDeleteModal:u,updateProfile:O,handleImageUpload:p,triggerImageUpload:m,formatDate:f,formatPrice:v}}},Q=(t("9b5a"),t("6b0d")),X=t.n(Q);const Z=X()(K,[["render",R],["__scopeId","data-v-758d529c"]]);a["default"]=Z}}]);
//# sourceMappingURL=chunk-28a89ab6.a527599e.js.map