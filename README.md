# 2022-database

## 10주차 실습 실행 방법

1. 레퍼지토리 복사

  <pre>
  <code> 
    const pool=mysql.createPool(
      process.env.JAWSDB_URL ?? {
          host: 'localhost',
          user: 'root',
          database: 'week10',
          password: '0630'
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0
      }
    );
    </code>
</pre>

<br>

## <span style="color:red">**테이블 작성법**</span>

| 이름   | 과             | 전공       | 학번     |
| ------ | -------------- | ---------- | -------- |
| 홍길동 | 정보통신공학과 | 정보통신   | 12200001 |
| 도깨비 | 컴퓨터공학과   | 컴퓨터공학 | 12200002 |
| 구미호 | 전기공학과     | 전기공학   | 12200003 |

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

</br>
