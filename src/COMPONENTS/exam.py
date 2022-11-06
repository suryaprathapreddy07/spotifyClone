arr=[1,3,2,4,5]
n=len(arr)
# count=0
# for i in range(n):
#     for j in range(n):
#         for k in range(n):
#             for l in range(n):
#                 if((l<=n and k<l and j<i and i>=1) and (arr[j]<arr[l] and arr[j]>arr[k] and arr[k]>arr[i])):
#                     count+=1

# print(count)

resultlist=[[i,j,k,l] for i in range(n) for j in range(n) for k in range(n) for l in range(n) if(0<=i<j<k<l<=n and arr[i]<arr[k]<arr[j]<arr[l]) ]
print(len(resultlist))