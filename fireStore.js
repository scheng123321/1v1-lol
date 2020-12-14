var db;

function initializeFirestore()
{
	db = firebase.firestore();
}

//TODO: add subcollections support 

function addDocument(collectionName, data, isJson){
	if(!db || !collectionName)
		return;
	
	if(isJson){
		try {
			data = JSON.parse(data);
		} catch(error){ 
			console.log("Couldnt insert data to db, invalid json");
			return;
		}
	}
		
	return db.collection(collectionName).add(data);
}

function setDocument(collectionName, documentName, data, isJson, isMerge){
	if(!db || !collectionName || !documentName)
		return;
	
	if(isJson){
		try {
			data = JSON.parse(data);
		} catch(error){ 
			console.log("Couldnt insert data to db, invalid json");
			return;
		}
	}
		
	return db.collection(collectionName).doc(documentName).set(data, { merge: isMerge });
}

function updateDocument(collectionName, documentName, data, isJson){
	// TODO: add support for arrays
	if(!db || !collectionName || !documentName)
		return;
	
	if(isJson){
		try {
			data = JSON.parse(data);
		} catch(error){ 
			console.log("Couldnt insert data to db, invalid json");
			return;
		}
	}
		
	return db.collection(collectionName).doc(documentName).update(data);
}

function deleteDocument(collectionName, documentName){
	if(!db || !collectionName || !documentName)
		return;
		
	return db.collection(collectionName).doc(documentName).delete();
}

function getDocument(collectionName, documentName){
	if(!db || !collectionName || !documentName)
		return;
		
	return db.collection(collectionName).doc(documentName).get();
}

