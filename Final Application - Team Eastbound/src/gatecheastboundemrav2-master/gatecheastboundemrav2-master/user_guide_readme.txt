readme.txt for EMRA (Electronic Medical Records and Alerts) System by Team Eastbound for C6440, Spring 2016

############################
Team Members:
Anthony Passamonte
John Mansfield
Oscar Ornelas
Phil Jones

############################

The EMRA System consists of two websites:

1.  The Application Website:  		http://gatechemra.azurewebsites.net
2.  The Notification Emulator Website: 	http://gatechemraemulator.azurewebsites.net

############################

The Application Website Usage:

1.  Navigate to the application website (http://gatechemra.azurewebsites.net).
2.  Observe there are three main areas of the Patient Search Page:
	a.  The menu at the top of the page consisting of a title, Search link, and Alerts link
	b.  A Patient Demographics area in the middle of the page (currently void of data)
	c.  FHIR Population Health Alerts at the bottom of the page (which are emulated).  The four alerts are:
		- CDC Alert
		- New Generic Drug Availability
		- New Vaccine 
		- FDA Drug Recall
3.  To begin, click on the Search link on the menu at the top of the page
4.  Upon clicking on the link, you will be bought to a new page titled FHIR Patient Search
5.  Observe there are two main areas of this page:
	a.  The menu at the top of the page consisting of a title, Search link, and Alerts link
	b.  Patient Search Result area.  The Patient Search results consists of:
		-  A search box, located middle-top right to enter patient names into.
		-  Patient names should be entered into the following format: first_name last_name (first name then a space and then last name)
		-  As the patient name is being entered the results area below the search box will refine the list of patients to choose from
		-  The Patient results area is pre-populated with a list of approx. 1000 patients.
		-  The data for these patients is divided into columns:
			* Patient Name
			* Patient ID
		 	* DOB (Date of Birth)
			* Gender
			* Last Alert Type (Last alert triggered that may impact this patient)
			* Insurance Carrier (if applicable)
			* Health Provider (if applicable)
			* FHIR URL (patient data location)
		- As you mouse-over each row (each patient's data), you will notice a gray-selection mode.
		- Also, towards the bottom of this screen, you will see the ability to set the number of records viewable on the page, as well as, the ability to cycle through potential patients in order to search using that method.
6.  Assuming you have found a patient whose status and data you want to review, hover over that patient's row.  When the row turns a slight gray, left click one time.
7.  You will now be brought to the patient Demographics page (this will look exactly like the main page, but uneditable data will be populated.]
8.  Looking at the Patient Data page, you will notice the patient demographics for the patient selected is now populated:
	a.  Patient Number
	b.  Last Name
	c.  Middle Name
	d.  First Name
	e.  Chart Number
	f.  Address
	g.  Date of Birth
	h.  Date of Last Update
	i.  Gender
	j.  Marital Status
	k.  Home Phone Number
	l.  Work Phone Number
	m.  Email Address
	NOTE 1:  You will notice a menu on the left-middle of this page with the work Profile high-lighted.  This information was left for future development and was never intended to be a part of this Proof of Concept application.
	NOTE 2:  You will also notice the alerts section at the bottom of this page (more on that in a following section)
9.  This view now allows a Health Care professional to view patient data and alerts (more to follow), in a single glance - providing both holistic and individual data.
10.  Next, let's take a look back at the menu bar at the alerts link and left-click one time on that.
11.  This takes us to the data visualization page showing alerts and patients in the format of a dendogram (NOTE:  For more information on a dendogram, check here: https://en.wikipedia.org/wiki/Dendrogram)
12.  At the top of the page are the latest alerts for each of the 4 alert categories the EMRA Application can emulate.
13.  The rest of the page is the dendogram.  This dendogram presents several levels of data described as follows (from left to right):
	a. The Flare (left-most node): represents the "EMRA Alert Broadcast System", these alerts are produced by our emulator (see below for emulator instructions).
	b. Left-most Leaf: displays any the four types of Health Alerts supported by the EMRA system, these are:
   		- CDC Alerts, for example measles outbreaks
   		- FDA Drug recalls
   		- New Generic Drugs available
   		- New vaccines available
	c. Mid-Left Leaf shows the patient's Insurance Carrier
	d. Mid-right Leaf: shows the PCP's name, in addition to the Clinic or Hospital name
	e. Right-most Leaf: displays all of the Patients Names, Insurance Carrier, and PCP for the specific alert. Patients could appear in multiple Leaf's assuming they are linked to multiple Alerts
	NOTE1:  Any leaf (excluding the right-most patient leaf) can be collapsed for easier viewing with a single left-click on the leaf.
		- CAUTION:  Collapsing the Flare (left-most leaf) may result in collapsing the entire dendogram and you may need to refresh your web browser to view it again.
	NOTE2:  By moving your mouse over any patient leaf (right-most), a pop-up will appear with more detailed patient information.
	
############################

The Notification Emulator Website Usage:

1.  Navigate to the Notification Emulator Website(http://gatechemraemulator.azurewebsites.net)
2.  Observe there is one main section of the page with four pre-defined alerts of our proof-of-concept application:
	a. CDC Alert
	b. New Generic Drug Availability
	c. New Vaccine
	d. FDA Drug Recall
3.  These alerts can be toggled on or off by left-clicking on each one
4.  When on, the title appears in color, when toggled off, the title appears in white
	NOTE:  To fully appreciate the real-time capabilities, pull up the Notification Emulator Website on your mobile device while browsing the EMRA application on your laptop/desktop and watch the alerts become active/inactive
	
############################

Final note

As requested, your POC for any issues with this application is Oscar Ornelas.  
He can be reached at the following email address: oscar.ornelas@gmail.com and phone/SMS: 774.287.8392