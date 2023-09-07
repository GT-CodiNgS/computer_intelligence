from flask_cors import CORS  # Import CORS from flask_cors
from flask import Flask, request, jsonify, render_template
import pickle, re
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')


app = Flask(__name__)
CORS(app)  
with open("disClassifier.pkl", 'rb') as f:
    classifier = pickle.load(f)
with open("tfidf.pkl", 'rb') as f:
    tfidf = pickle.load(f)
lemmatizer = WordNetLemmatizer()


def predict_result(text, lemmatizer, tfidf, classifier):
    text = text.lower()
    text = re.sub('#', '', text)
    text = re.sub('[^a-zA-Z ]', '', text)
    words = nltk.word_tokenize(text)
    words = [lemmatizer.lemmatize(word) for word in words if word not in set(stopwords.words('english'))]
    sentence = ' '.join(words)
    temp = [sentence]
    temp1 = tfidf.transform(temp)
    result = classifier.predict(temp1)
    return result[0]


def get_label(result):
    if result == 0:
        return "Not Disaster"
    elif result == 1:
        return "Disaster"


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data['tweet']
    result = predict_result(text, lemmatizer, tfidf, classifier)
    label = get_label(result)
    return jsonify({'prediction': label})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
