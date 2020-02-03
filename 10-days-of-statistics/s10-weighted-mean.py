# 5
# 10 40 30 50 20
# 1 2 3 4 5

# 32.0

# N = map(int, input().split())
# X = list(map(int, input().strip().split(' ')))
# W = list(map(int, input().strip().split(' ')))
# sum_X = sum([a*b for a, b in zip(X, W)])
# print(round((sum_X/sum(W)), 1))

# Python 3


# def weighted_mean(numbers, weights):
#     total = sum([num * weight for num, weight in zip(numbers, weights)])
#     print(round(total / sum(weights), 1))


# numbers = int(input())  # Not needed; so overwrite var with next input
# numbers = map(float, input().split())
# weights = list(map(int, input().split()))

# weighted_mean(numbers, weights)

# ------------------------

# input()
# get_gen = lambda : (int(x) for x in input().split())
# top = 0
# bottom = 0
# for xi, wi in zip(get_gen(), get_gen()):
#     top += xi * wi
#     bottom += wi
# print(round(top / bottom, 1))

# ------------------------

# n = int(input())
# data = [int(i) for i in input().split()]
# weights = [int(i) for i in input().split()]

# # WITH NUMPY
# # import numpy as np
# # weighted_avg = np.average(data, weights)

# # WITHOUT NUMPY
# weighted_avg = sum([data[i]*weights[i]/sum(weights) for i in range(n)])

# print(round(weighted_avg, 1))

# ------------------------

# import operator
# input()
# n = list(map(int, input().split()))
# w = list(map(int, input().split()))
# print("{0:.1f}".format(sum(map(operator.mul, n, w))/sum(w)))

# ------------------------

# input()
# x = [int(x) for x in input().split()]
# w = [int(x) for x in input().split()]

# for i in range(len(x)):
#     x[i] *= w[i]

# print(round(sum(x) / sum(w), 1))

# ------------------------

# import numpy as np
# size = int(input())
# X = np.asarray(list(map(int, input().split())))
# W = np.asarray(list(map(int, input().split())))
# print(round(numpy.dot(X, W)/numpy.sum(W)))
