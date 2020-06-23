// Created by iWeb 3.0.1 local-build-20100627

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.uniras.dk/Uniras/Photos/Photos_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.uniras.dk/Uniras/Photos',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.uniras.dk/Uniras/Photos',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(287,215),new IWSize(287,32),new IWSize(344,262),27,27,0,new IWSize(72,55)),new IWPhotoFrame([IWCreateImage('Photos_files/brownbook_ul.png'),IWCreateImage('Photos_files/brownbook_top.png'),IWCreateImage('Photos_files/brownbook_ur.png'),IWCreateImage('Photos_files/brownbook_right.png'),IWCreateImage('Photos_files/brownbook_lr.png'),IWCreateImage('Photos_files/brownbook_bottom.png'),IWCreateImage('Photos_files/brownbook_ll.png'),IWCreateImage('Photos_files/brownbook_left.png')],null,0,0.662281,0.000000,12.000000,13.000000,12.000000,67.000000,48.000000,53.000000,58.000000,1.000000,1.000000,1.000000,1.000000,null,null,null,0.500000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photos_files/PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
