interface Member {
  name: string,
  age?: number
}

getMember()
  .then(member: Member => {
    const ageString = member.age.toString() // Object is possibly 'undefined'
  })

