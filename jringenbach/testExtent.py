from scipy.spatial import ConvexHull
import numpy as np
from math import *
from random import *
from minRect import minimum_bounding_rectangle


points = np.random.rand(30,2)
rect = minimum_bounding_rectangle(points)
print(rect)
