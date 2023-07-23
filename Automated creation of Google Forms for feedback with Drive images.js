function editGoogleForm() {
  var form = FormApp.openByUrl('https://docs.google.com/forms/d/1zzZHYiZn1g3cqm-ag9NyEXdit'); // Replace with URL of form

  // Edit form properties
  form.setTitle('Title of the form');

  form.setDescription(`We would like to know about your experience at BT. 
  
  Your genuine feedback will help us in improving and planning better for future. So, 
  please take a few minutes to fill this. Though we are taking your roll number, it is 
  purely for ensuring that the feedback is from the right person and your details would 
  not be shared with your teacher or staff in general.
  
  Thanks and regards,
  Vaibhav Bakliwal 
  (BT Team).`);
  
  form.setCollectEmail(true)
  form.setLimitOneResponsePerUser(true)


  var question = form.addTextItem();
  question.setTitle('Roll number');
  // Set response validation using a regular expression pattern
  var validation = FormApp.createTextValidation()
    .setHelpText('e.g. C24123456')
    .requireTextMatchesPattern('C24[0-9]{6}|S[0-9]{8}')
    .build();
  question.setValidation(validation);
  question.setRequired(true); // Make the question required


  var question = form.addTextItem();
  question.setTitle('Primary phone number');
  // Set response validation using a regular expression pattern
  var validation = FormApp.createTextValidation()
    .setHelpText('Enter 10 numbers only') 
    .requireTextMatchesPattern('[0-9]{10}')
    .build();
  question.setValidation(validation);
  question.setRequired(true); // Make the question required

  var question = form.addDateItem().setTitle("Date of birth");
  question.setRequired(true);


// .....................................................Section 2..............................................................
  const pageTwo = form.addPageBreakItem().setTitle('Physics Teacher Feedback');

  const Phy_teacher_code = ['P4', 'P5', 'P7', 'P22']
  form.addListItem().setTitle("Select the Physics Teacher's Code").setChoiceValues(Phy_teacher_code).setRequired(true);
     

  var img = DriveApp.getFileById("1Alfonu0");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Subject Knowledge")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("10Due9HxB7");// Put Google Drive images ID
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Communication Skills")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("1bO04bDlTIsx");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Commitment")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);

  
  var img = DriveApp.getFileById("1TgQfIh4DbSrX7ji");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Online Experience")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);
  
 
  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Anything which you feel the Physics teacher should know (without your name getting disclosed), so that the overall quality of the lecture can be enhanced.');


  // .....................................................Section 3..............................................................
  const pageThree = form.addPageBreakItem().setTitle('Chemistry Teacher 1 Feedback');

  const Chem1_teacher_code = ['C6', 'C15', 'C21']
  form.addListItem().setTitle("Select the Chemistry Teacher's Code").setChoiceValues(Chem1_teacher_code).setRequired(true);
     

  var img = DriveApp.getFileById("1Alfonu0P_iBpsLo-uB");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Subject Knowledge")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("10Due9HxB7HhoC");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Communication Skills")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("1bO04bDlTIsx-Bt");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Commitment")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);

  
  var img = DriveApp.getFileById("1TgQfIh4DbSrX");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Online Experience")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);
  
 
  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Anything which you feel the Chemistry teacher should know (without your name getting disclosed), so that the overall quality of the lecture can be enhanced.');


  // .....................................................Section 4..............................................................
  const pageFour = form.addPageBreakItem().setTitle('Chemistry Teacher 2 Feedback');

  const Chem2_teacher_code = ['C6', 'C15', 'C21']
  form.addListItem().setTitle("Select the Chemistry Teacher's Code").setChoiceValues(Chem2_teacher_code).setRequired(true);
     

  var img = DriveApp.getFileById("1Alfonu0P_iBpsLo");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Subject Knowledge")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("10Due9HxB7HhoC9hB18");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Communication Skills")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("1bO04bDlTIsx-BtY");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Commitment")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);

  
  var img = DriveApp.getFileById("1TgQfIh4DbSrX7j");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Online Experience")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);
  
 
  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Anything which you feel the Chemistry teacher should know (without your name getting disclosed), so that the overall quality of the lecture can be enhanced.');


  // .....................................................Section 5..............................................................
  const pageFive = form.addPageBreakItem().setTitle('Maths Teacher Feedback');

  const Maths_teacher_code = ['M1', 'M7', 'M8', 'M14', 'M18']
  form.addListItem().setTitle("Select the Maths Teacher's Code").setChoiceValues(Maths_teacher_code).setRequired(true);
     

  var img = DriveApp.getFileById("1Alfonu0P_iBpsLo-u");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Subject Knowledge")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("10Due9HxB7Hho");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Communication Skills")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);


  var img = DriveApp.getFileById("1bO04bDlTIsx-BtY5mB1");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Commitment")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);

  
  var img = DriveApp.getFileById("1TgQfIh4DbSrX7jid");
  var imageItem = form.addImageItem();
  imageItem.setImage(img);
  form.addScaleItem().setTitle("Online Experience")
  .setBounds(1, 10)
  .setLabels("Poor", "Excellent").setRequired(true);
  
 
  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Anything which you feel the Maths teacher should know (without your name getting disclosed), so that the overall quality of the lecture can be enhanced.');


  // .....................................................Section 6..............................................................
  const pageSix = form.addPageBreakItem().setTitle('Non-Teaching Section Feedback');
  form.addSectionHeaderItem().setTitle('BT Admin feedback.');

  form.addScaleItem().setTitle("COMMITMENT: Do you feel the admin at Bakliwal Tutorials is committed to make your JEE preparation journey comfortable? Are they approachable, friendly? Do they patiently listen to your queries, if any, and resolve them?")
  .setBounds(1, 10).setRequired(true);

  form.addScaleItem().setTitle("COMPETENCE: The quality of systems at BT, which includes admission process to BT, conduction of offline, online BTests, Timetable, Communication through groups or emails, quality of teachers that are recruited etc")
  .setBounds(1, 10).setRequired(true);

  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Please share your valuable feedback so that we can improve. It may be about your center in charge or the one point contact the leadership of BT or simply some right or wrong practices or about their execution.');



  form.addSectionHeaderItem().setTitle('Feedback about Zoom Doubt Sessions.');

  form.addScaleItem().setTitle("OVERALL IMPRESSION: Are the teachers solving the doubts properly in Zoom Doubt Sessions? Are your doubts answered to your satisfaction within the timeframe?")
  .setBounds(1, 10).setRequired(true);

  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Anything which you feel the Doubts teachers should know (without your name getting disclosed), so that the overall quality of the doubt sessions can be enhanced. You may mention teacher codes to give any specific feedback about the teacher.');



  form.addSectionHeaderItem().setTitle('Doubt Forum Feedback');

  form.addScaleItem().setTitle("OVERALL IMPRESSION: Are the teachers solving the doubts properly on the Doubt Forum? Are your doubts answered to your satisfaction within the timeframe?")
  .setBounds(1, 10).setRequired(true);

  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive feedback: Anything which you feel the Doubts teachers should know (without your name getting disclosed), so that the overall quality of the doubt sessions can be enhanced. You may mention teacher codes to give any specific feedback about the teacher.');



  form.addSectionHeaderItem().setTitle('Feedback of your BTests');

  form.addScaleItem().setTitle("Paper Quality: Rate the BTest Question Paper based on  whether it was error free or not and based on the questions asked in the BTest")
  .setBounds(1, 10).setRequired(true);

  form.addScaleItem().setTitle("Online Experience: Rate the BTest online platform based on your experience while giving the BTest")
  .setBounds(1, 10).setRequired(true);

  var item = form.addParagraphTextItem();
  item.setTitle('Descriptive Feedback: Any feedback/suggestion  that you have regarding the BTest');

  form.addSectionHeaderItem().setTitle('We are extremely grateful for your valuable inputs and shall try our best to work on your feedback. Thanks and regards, BT team.');
}