# Wavelength EMR

The name of the this application is called Wavelength. This web aplication is a simple but highly functional electronic medical record system that could be implemented at a small urgent care center or emergency room. Our user experience is both provider- and patient-centric, creating a logical organizational structure that will help streamline workflow for providers and facilitate a more integrated care-delivery system for each patient.

[GitHub Page](https://github.com/william-hu-codes/electronic-medical-record)

[Deployed App](https://wavelength-medical-records-50e817316e66.herokuapp.com/?fbclid=IwAR3qqvgpBvcA0vYMgNmVAxtsXeKd3JTlKcfBz8ps_Fxcilj5tG2uiFxbOaw)

## User-Experience / Getting Started

### Home Page
The user will be greeted by our application's intro page. From there, the user will be able to sign into our application using google authentication. 

Logged out photo
![Logged Out Home Page](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/4cb21eb0-cac7-409a-8f27-3e47530f81f2)

Logged in photo
![Logged In Home Page](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/b525b803-72cb-41ed-b836-2b535612c054)

### Patient Index
The user will be able to view all patients admitted in our EMR system record at the patient index page. Patients can also be added from the patient index page, where the user will be taken to a form to fill out all required information on the soon to be admitted patient. The user will also be able to filter patients based on their admission status(admitted or discharged) or all patients on record. If the user selected the "all patients" feature, the index will present all patients on record regradless of admission status. Patients will be highlighted in a light grey tint based on their discharged status( discharged patients will be light grey). Once the patient is admitted, the user will be able to view the patients facesheet by selecting the name of that patient from the index. 

Patient Index w/o Filter
![Patient Index No filter](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/f777b113-f656-40fe-9de5-8d18bc448148)

Patient Index Showcase Filter
![Selecting a Patient Filter](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/0abfce6d-851e-4c4c-acfc-09a9a1f57e8f)

Patient Index All Patients Filter
![Patient Filter All Patients](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/1f1cd0dd-2b11-4e8b-8902-6df2f6920deb)

![Add New Patient PAge](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/743403ff-f446-4422-8513-9c887c53350b)

### Patient Facesheet

In the patient's facesheet, the user will be able to view that patients current assigned healthcare providers. the user can add vitals to the patient or delete an already added set of vitals from that patient's facesheet. The patient's facesheet will also have progress notes so the user will be able to witness the last updated progress notes applied. The progress notes will be seperated into 3 sub-categories: Subjective; Objective; Assessment and Plan. The user can select "add progress note" so that the user will be able to add new set of progress notes or the user can view all progress notes which will take the user to a new page to see all associated progress notes. In the patient facesheet, the user can also discharge the patient. Upon discharging the patient you can automatically generate a discharge summary for the patient which summarizes the patient's hospital stay including assessments, findings, treatments, and discharge instructions. This discharge summary is generated by openAiAPI in combination of all the patients' existing progress notes as documented by the healthcare team.

Patient's Facesheet showcasing general info on patient   
![Patient Facesheet(patient info)](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/349e703a-7338-4b28-a39a-52d0f7f395a7)

Patient's Facesheet showcasing recorded vitals on patient.
![Patient Facesheet(vitals)](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/5f11ec6d-13d9-454a-b933-7091795e984e)


Adding new set of Vitals to patient
![Create Vitals](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/a668b507-1909-468a-96e6-13223d0dcf84)


Patient Facesheet showcasing last recorded progress notes on patient
![Patient Facesheet(progress note page)](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/dac5c3fe-1017-4aef-9ae2-da4e8e944600)

Adding new set of Progress Notes to patient
![Creating Progress note](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/09e47853-a0a5-4ee7-af8c-c3abcaf1555d)


Patient's Generated Discharge Summary
![Discharge Summary](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/af114446-5301-47ef-b4b1-349d79407044)

### User Index

If the user uses the nav bar to navigate to the providers, they will be taken to the providers index. Here, base on the user's administration status, the user will be able to see the list of all current users as well as add new users or edit current users

The User Index
![User index](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/361415eb-575c-48c6-affc-1c64c97e0314)

If the user navigates to add users, the user will be able to create a user. The user has the option to allow Administration priviledges to the user.

Add User Feature
![Create User](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/1228234a-cf54-44c2-9049-640fc6b13730)

Based on the user's administration status certain features will or will not be available to said user. if the user navigated to edit users, they would be able to make changes to the user, such as job title and admin status.

Edit User Feature
![Edit User](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/6702f649-4f45-44fd-8a44-449ea9c413be)

If the user clicked on the name of the user/provider, the user will be able to view that user's profile. Within the profile, the user will be able to edit the user(synonumous function as "edit user" at the provider index), unassign current patients, or assign new patients using the drop down and clicking the button "assign patient".

User Profile showcasing assigning patient selection
![Selecting Patient to Assign](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/28da75dd-71d7-4b15-8376-5ba46c8ba3c3)
    
User Profile showcasing result of assigning a patient
![Result of Assigning a Patient](https://github.com/william-hu-codes/electronic-medical-record/assets/96082623/c0ba9833-b7d1-4669-b01d-aed986f7bb2f)

## Technologies Used
- HTML/CSS
- Node.js
- Mongoose/MongoDB
- Express
- GitHub
- Google-OAuth
- OpenAI

## Roadmap
- [x] Admit/readmit/discharge patients
- [x] Filter patients view (admitted / discharged / all)
- [x] Add new vital signs
- [x] Abnormal vital signs appear in bolded red font
- [x] Add new progress notes
- [x] Most recent progress note shows up in patient's main view with button to view all patient's progress notes
- [x] Assign admin priveleges to admins to grant user ability to add new users and assign others as admin
- [x] Enforce OAuth login to use functinoality of app
- [x] Assign patients to specific providers and have them appear in provider's profile view
- [x] Use OpenAI to automatically and dynamically generate discharge summaries unique to each patient, based on patient's progress notes as documented by healthcare team
- [ ] Grant access keys for patients to view their own healthcare records
- [ ] Multi-language Support
- [ ] Imperial system support
- [ ] Archive "deleted" vitals into an array in database
- [ ] Implement section for "orders"
- [ ] Implement section for lab results
- [ ] Implement an "inbox" for providers which generates a notification when an assigned patient has an update/change

## Team and Primary/Lead Roles:
    
### Contributors
- William Hu - [LinkedIn](https://www.linkedin.com/in/william-wl-hu) | [GitHub](https://github.com/william-hu-codes)
- Robert Hayden - [LinkedIn](https://www.linkedin.com/in/robert-m-hayden/) | [GitHub](https://github.com/rmhayden)
- Reginald Leandre - [LinkedIn](https://www.linkedin.com/in/reginald-leandre-186230236/) | [GitHub](https://github.com/rleandre)

### Roles: 
- Frontend - Reggie(Will/Rob)
- Backend - Will(reggie/rob)
- Git wrangler - Will
- Design lead - Rob(Will/reggie)	 
- Research / documentation lead - Reggie/Will/Rob
