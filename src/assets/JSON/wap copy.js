// Tips & Tricks
// No need for another entity: Template, just use isPublic on the wap
// Focus on make it easy to demo over supporting full customization
// Support adding full-blown-component rather than letting the user add stuff manually 
// (Delete is easy to implement later)
// Support several themes for components (CSS only)
// default FLEX is your friend, handle media proprtion correctly
// Here are some components:
// wap-header, wap-footer, wap-container
// wap-gallery (photos: {url, title,txt})
// wap-map (center,zoom,markers), 
// wap-video (url, iframe) 
// wap-social (socials) 
// wap-signup => wapService
// wap-chat
// wap-contact-us => wapService

var wap = {
	"_id": "5e28393890dd7201a06d4e44",
	"name": "HairDresser Baluta Marketing Site",
	"imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
	"createdBy": {
		"_id": "5e26e0b718a0891d4c995527",
		"username": "Hetro Sekshual"
	},
	"cmps": [
		{
			"id": "wc02",
			"type": "wap-header",
			"info": {
				"title": "HairDresser Baluta",
				"substitle": "Your Hair is !(Who you Are)",
				"btn": {"label": "Schedule Today!", "link" : "#wc03"}
			},
			"style": {
				"background": "url()",
				"padding": "10px"
			}
		},
		{
			"id": "wc01",
			"type": "wap-map",
			"info": {
				"name": "Paris",
				"lat": 12.909,
				"lng": 23.9,
				"zoom": 2
			},
			"style": {
				"backgroundColor": "#f53b76",
				"height": "300px",
				"padding": "10px"
			}
		},		
		{
			"id": "wc03",
			"type": "wap-container",
			"info": {
				"dir": "column",
				"cmps": [
					{},
					{}
				]
			},
			"style": {
			}
		}
	],
	"isPublic" : true
}