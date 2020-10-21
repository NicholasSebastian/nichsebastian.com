---
title: "Introduction to Machine Learning with TensorFlow"
description: "Trying out machine learning with TensorFlow's Keras API for image classification."
date: "2020-06-30"
---

My horrible model:
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