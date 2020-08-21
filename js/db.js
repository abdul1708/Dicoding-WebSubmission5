let dbPromised = idb.open("news-reader", 1, function(upgradeDb) {
  let footballsObjectStore = upgradeDb.createObjectStore("footballs", {
    keyPath: "ID"
  });
  footballsObjectStore.createIndex("post_title", "post_title", {
    unique: false
  });
});

function saveForLater(football) {
  dbPromised
    .then(function(db) {
      let tx = db.transaction("footballs", "readwrite");
      let store = tx.objectStore("footballs");
      console.log(football);
      store.add(football.competitions);
      return tx.complete;
    })
    .then(function() {
      console.log("Artikel berhasil di simpan.");
    });
}

function getAll() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        let tx = db.transaction("footballs", "readonly");
        let store = tx.objectStore("footballs");
        return store.getAll();
      })
      .then(function (footballs) {
        resolve(footballs);
      });
  });
}

function getAllByTitle(title) {
  dbPromised
    .then(function(db) {
      let tx = db.transaction("footballs", "readonly");
      let store = tx.objectStore("footballs");
      let titleIndex = store.index("post_title");
      let range = IDBKeyRange.bound(title, title + "\uffff");
      return titleIndex.getAll(range);
    })
    .then(function (footballs) {
      console.log(footballs);
    });
}

function getById(id) {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        let tx = db.transaction("footballs", "readonly");
        let store = tx.objectStore("footballs");
        return store.get(id);
      })
      .then(function (football) {
        resolve(football);
      });
  });
}
