(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7M+c":function(l,n,u){"use strict";var t=u("CcnG"),e=u("umt8"),r=u("lLcl"),i=u("ZYCi");u.d(n,"a",function(){return c});var a=t.pb({encapsulation:0,styles:[[".await[_ngcontent-%COMP%]{height:calc(100vh - 3.75rem)}"]],data:{}});function o(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,13,"div",[["class","flex flex-column align-items-center engagement background-grey await"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,12,"div",[["class","engagement-text  font--xxl-18 font-black--light text-center margin-xxl--top-160"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Thanks for signing up! "])),(l()(),t.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Once we verify your profile you will be granted access to Pandy.AI. "])),(l()(),t.rb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" You will receive an email from us "])),(l()(),t.rb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" once we finish the verification process. "])),(l()(),t.rb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Please make sure you check all your email folders, including Spam (Junk). "]))],null,null)}function s(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-await-verifications",[],null,null,null,o,a)),t.qb(1,114688,null,0,e.a,[r.a,i.l],null,null)],function(l,n){l(n,1,0)},null)}var c=t.nb("app-await-verifications",e.a,s,{},{},[])},RNad:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("lLcl");var t=function(){function l(l,n){this.talentStore=l,this.router=n}return l.prototype.ngOnInit=function(){if(window.innerWidth>1024){var l=JSON.parse(localStorage.getItem("user"));this.router.navigate("TALENT"==l.rola?["talent"]:["institution"])}},l}()},XSzo:function(l,n,u){"use strict";var t=u("CcnG"),e=u("RNad"),r=u("lLcl"),i=u("ZYCi");u.d(n,"a",function(){return c});var a=t.pb({encapsulation:0,styles:[[".await[_ngcontent-%COMP%]{height:calc(100vh - 3.75rem)}"]],data:{}});function o(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,8,"div",[["class","flex flex-column align-items-center engagement background-grey await"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,7,"div",[["class","engagement-text  font--xxl-18 font-black--light text-center margin-xxl--top-160 margin-xxl--left-12 margin-xxl--right-12"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Thank you for visiting Pandy AI. "])),(l()(),t.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Our mobile experience is still in development. "])),(l()(),t.rb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Please use your laptop or desktop computers to sign up. We will let you know as soon as Pandy AI official apps are available. "]))],null,null)}function s(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-responsive-screen",[],null,null,null,o,a)),t.qb(1,114688,null,0,e.a,[r.a,i.l],null,null)],function(l,n){l(n,1,0)},null)}var c=t.nb("app-responsive-screen",e.a,s,{},{},[])},umt8:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("lLcl");var t=function(){function l(l,n){this.talentStore=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.talentStore.get_talent_s().subscribe(function(n){if(n.results.is_verified){var u=l.router.url.split("/");l.router.navigate("talent"===u[1]?["/talent"]:["/institution"])}})},l}()}}]);