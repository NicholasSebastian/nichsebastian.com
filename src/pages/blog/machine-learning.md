---
title: "Introduction to Machine Learning with TensorFlow"
description: "Trying out machine learning with TensorFlow's Keras API for image classification."
date: "2020-06-30"
---

So the other day I joined a coding competition. It was the 
Shopee Code League of 2020 and there were many rounds. We got different tasks every weekend or so for the span of almost 3 months.

Not gonna lie, it was pretty hell considering it was my first actual programming-focused competition, and out of all the challenges, one topic stood out to be especially challenging: Machine Learning.

To me at that time, I don't have even an inkling of understanding of Machine Learning even entails... not that I understand it any more now than I did before. Actually, if anything, I think I'm more confused now than I was before.

## What makes it so hard?
It has... a lot of math involved, and by a lot, I mean that the whole concept of Machine Learning is a big abstraction of mathematical ideas. In machine learning, there is no sure fire way of making 'the right' model. It really is just all trial and error. From understanding the theoretical concepts, you try to make a mathematical model that 'makes the most sense' for the use case, then you feed it with data so it can adjust itself and be smart, while you just pray that it doesn't overfit.

## The Experience
In my case, I had to learn the Machine Learning concepts in a week, and obviously, I didn't get very far...  
After digging through the TensorFlow and Keras official documentation, a dozen StackOverflow pages, a couple of YouTube tutorials, and a trip to trial and error hell, I finally managed to scrape together my very first Machine Learning model:
```
def create_conv_model(shape):
    model = Sequential()

    model.add(Conv2D(32, (3, 3), input_shape=shape))
    model.add(Activation("relu"))
    model.add(BatchNormalization())

    model.add(Conv2D(32, (3, 3)))
    model.add(Activation("relu"))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(0.25))

    model.add(Conv2D(64, (3, 3)))
    model.add(Activation("relu"))
    model.add(BatchNormalization())
    model.add(Dropout(0.25))

    model.add(Conv2D(128, (3, 3)))
    model.add(Activation("relu"))
    model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(0.25))

    model.add(Flatten())

    model.add(Dense(512))
    model.add(Activation("relu"))
    model.add(BatchNormalization())
    model.add(Dropout(0.5))

    model.add(Dense(128))
    model.add(Activation("relu"))
    model.add(BatchNormalization())
    model.add(Dropout(0.5))

    model.add(Dense(42))
    model.add(Activation("softmax"))

    # Model settings.
    model.compile(loss="categorical_crossentropy",
                  optimizer="adam",
                  metrics=["accuracy"])

    return model
```

The goal of the challenge at the time was to make a machine learning model that would be able to recognize images and discern its appropraite category, like bag, or shoe, or shirt for example.

And my model? During training when using the training data, it managed to go all the way up to 77% accuracy, but when it mattered the most and had to go through the actual testing data, it only got it right 38% of the time...  
It was horribly overfitted, and well... I can't say I didn't expect it.

## Conclusion
All in all, it was an interesting experience, having to learn something new in such a short time span, only to have failed miserably. If I learned anything from this, it's that I hate Python and I hate Machine Learning :)